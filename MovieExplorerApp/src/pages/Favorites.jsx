// src/pages/Favorites.jsx

import { useFavorites } from '../context/FavoritesContext'
import MovieCard from '../components/MovieCard'

function Favorites() {
  const { favorites } = useFavorites()

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h2 className="text-white text-2xl font-bold mb-8">
        ❤️ My Favorites ({favorites.length})
      </h2>

      {/* Koi favorite nahi */}
      {favorites.length === 0 && (
        <div className="text-center text-gray-400 mt-20">
          <p className="text-5xl mb-4">🎬</p>
          <p className="text-xl">No favorite movies!</p>
          <p className="text-sm mt-2">
            Go to the home page and press the ❤️ button
          </p>
        </div>
      )}

      {/* Favorites Grid */}
      <div className="flex flex-wrap gap-6 justify-center">
        {
        favorites.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.rating}
            year={movie.year}
            genre={movie.genre}
            poster={movie.poster}
          />
        ))}
      </div>

    </div>
  )
}

export default Favorites