import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

const MovieCard = ({id, title, rating, poster, year, genre}) => {

  const {isFavorite, removeFavorite, addFavorite} = useFavorites()

  const navigate = useNavigate()

  const favorited = isFavorite(id)
  const movieObj = {id, title, rating, poster, year, genre }

  const handleFavorite = (e) => {
    e.stopPropagation()
    favorited ? removeFavorite(id) : addFavorite(movieObj)
  }

  const movieDetailsHandleClick = () => {
    navigate(`/movie/${id}`)
  }


  return (

     <div onClick={movieDetailsHandleClick} className="bg-gray-800 dark:bg-gray-950 rounded-xl overflow-hidden 
                    w-full hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10
                    transition-all cdfduration-300 cursor-pointer group">

      {/* Movie Poster */}
      <div className="relative w-full overflow-hidden bg-gray-700">
        <img
          src={poster}
          alt={title}
          className="w-full h-full object-cover group-hover:brightness-75 
                     transition-all duration-300"
        />

        {/* Rating Badge */}
        <div className={`absolute top-2 right-2 text-gray-900 
                        text-xs font-bold px-2 py-1 rounded-full
                        ${parseFloat(rating) >= 7 ? 'bg-green-400' : 'bg-yellow-100'}`}>
          ⭐ {rating}
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-3 flex flex-col gap-1">
        {/* Title */}
        <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2">
          {title}
        </h3>

        {/* Year + Genre */}
        <div className="flex items-center justify-between mt-1">
          <span className="text-gray-400 text-xs">{year}</span>
              <span  className="text-xs bg-gray-700 text-yellow-400 
                px-2 py-0.5 rounded-full">
                  {genre}
              </span>
        </div>

      </div>

        <button onClick={handleFavorite} className={`absolute top-2 left-2 text-lg transition-all
          duration-200 hover:scale-125
          ${favorited ? 'text-red-500' : 'text-white/70'}`}>
          {favorited ? '❤️' : '🤍'}
        </button>

    </div>
  )
}

export default MovieCard