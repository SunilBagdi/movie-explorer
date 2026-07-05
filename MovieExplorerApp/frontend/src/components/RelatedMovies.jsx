import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

const RelatedMovies = ({movieId}) => {

    const [similarMovies, setSimilarMovies] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchMovies = async (query) => {
            setLoading(true)
            try {
                const response = await fetch(`${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}`)

                if (!response.ok) {
                    throw new Error('API not found!')
                }
                const data = await response.json()
                setSimilarMovies(data.results)
            } catch (error) {
                console.log(error);
            }finally{
                setLoading(false)
            }
        }
        fetchMovies()
    }, [movieId])

  return (
    <div className='m-5 mt-10'>
        <h1 className='text-white text-xl font-bold mb-6'>
            🎬 Related Movies
        </h1>
        {loading && (
            <div className='flex justify-center'>
                <div className="w-8 h-8 border-4 border-yellow-400
                    border-t-transparent rounded-full animate-spin"/>
            </div>
        )}
        {!loading && (
            <div className='flex flex-wrap p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6'>
                {
                    similarMovies.slice().map((movie) => (
                        <MovieCard 
                        key={movie.id}
                        id={movie.id} 
                        title={movie.title}
                        rating={movie.vote_average?.toFixed(1)}
                        year={movie.release_date?.split()}
                        genre={movie.genre}
                        poster={movie.poster_path ? `${IMAGE_URL}${movie.poster_path}`
                            :'https://placehold.co/500x750?text=No+Image'}
                        />
                    ))
                }
            </div>
        )}
        {!loading && similarMovies.length === 0 && (
            <p className='text-gray-400'>No Realted Movies Found!!!</p>
        )}
    </div>
  )
}

export default RelatedMovies