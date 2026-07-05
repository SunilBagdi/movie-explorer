import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import RelatedMovies from '../components/RelatedMovies';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'
const BACKDROP_URL = 'https://image.tmdb.org/t/p/original'

const MovieDetails = () => {

  const {id} = useParams()
  const navigate = useNavigate()

  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
        )
        if(!response.ok) {
          throw new Error('Movie detailes not found!')
        }
        const data = await response.json()
        setMovie(data)

      } catch (error) {
        setError(error.message)
      }
      finally{
        setLoading(false)
      }
    }
    fetchMovieDetails()
  }, [id])

  if(loading) {
    return(
      <div className="flex justify-center items-center min-h-screen bg-gray-950">
        <div className="w-12 h-12 border-4 border-yellow-400
                        border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if(error ){
    return(
      <div className="flex flex-col items-center justify-center
                      min-h-screen bg-gray-950 gap-4">
        <p className="text-red-400 text-xl">{error}</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-yellow-400 text-gray-900 px-6 py-2 cursor-pointer
                     rounded-lg font-semibold hover:bg-yellow-300"
        >
          ← Go Back
        </button>
      </div>
    )
  }

  if(!movie) return null 

  return (
     <div className="min-h-screen bg-gray-950 dark:bg-black">

      {/* Backdrop Image */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        <img
          src={movie.backdrop_path
              ? `${BACKDROP_URL}${movie.backdrop_path}`
              : 'https://placehold.co/1280x720?text=No+Backdrop'
          }
          alt={movie.title}
          className="w-full h-full object-cover brightness-80"
        />

        {/* Back Button — backdrop ke upar */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-black/50 text-white
                     px-4 py-2 rounded-lg hover:bg-black/80 font-bold
                     transition-colors backdrop-blur-sm cursor-pointer" 
        >
          ← Back
        </button>
      </div>

      {/* Movie Info Section */}
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-8">

        {/* Poster */}
        <div className="flex-shrink-0">
          <img
            src={ movie.poster_path
                ? `${IMAGE_URL}${movie.poster_path}`
                : 'https://placehold.co/500x750?text=No+Image'
            }
            alt={movie.title}
            className="w-48 rounded-xl shadow-2xl shadow-black/50
                       mx-auto md:mx-0"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-4 text-white">
          <div>
            <h1 className="text-3xl font-bold leading-tight">
              {movie.title}
            </h1>
            <p className="text-gray-400 mt-1">
              {movie.release_date?.split()} • {' '}
              {movie.runtime} min • {' '}
              {movie.original_language?.toUpperCase()}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-yellow-400 text-gray-900 font-bold px-3 py-1 rounded-full text-sm">
              ⭐ {movie.vote_average?.toFixed(1)}
            </span>
            <span className="text-gray-400 text-sm">
              ({movie.vote_count?.toLocaleString()} votes)
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {
            movie.genres ?.map((genre) => (
              <span
                key={genre.id}
                className="bg-gray-800 text-yellow-400 text-xs
                           px-3 py-1 rounded-full border border-gray-700"
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              {
              movie.overview || 'No overview available.'
              }
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-2">
            <div className="bg-gray-800 rounded-xl p-3">
              <p className="text-gray-400 text-xs mb-1">Budget</p>
              <p className="text-white font-semibold text-sm">
                {
                movie.budget
                  ? `$ ${movie.budget.toLocaleString()}`
                  : 'N/A'
                }
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-3">
              <p className="text-gray-400 text-xs mb-1">Revenue</p>
              <p className="text-white font-semibold text-sm">
                {movie.revenue
                  ? `$ ${movie.revenue.toLocaleString()}`
                  : 'N/A'}
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-3">
              <p className="text-gray-400 text-xs mb-1">Status</p>
              <p className="text-white font-semibold text-sm">
                {movie.status || 'N/A'}
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-3">
              <p className="text-gray-400 text-xs mb-1">Tagline</p>
              <p className="text-yellow-400 font-semibold text-sm italic">
                {movie.tagline || 'N/A'}
              </p>
            </div>
            </div>

        </div>
      </div>
      
      <RelatedMovies movieId={id}/>

    </div>
  )
}

export default MovieDetails