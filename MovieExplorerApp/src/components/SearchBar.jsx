import React from 'react'

const SearchBar = ({search, setSearch}) => {
  return (
    <div className='relative w-full max-w-md mb-6'>
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
        🔍
      </span>
        <input type='text' placeholder="Search movie title..." value={search} 
        onChange={(e) => setSearch(e.target.value)} className='w-full bg-gray-800 dark:bg-gray-950 text-white placeholder-gray-700 
        border border-gray-700 rounded-xl pl-10 pr-10 py-3 focus:outline-none focus:border-yellow-400
        transition-colors duration-200'/>
        {
            search && (
                <button onClick={() => setSearch('')}
                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-color'>
                    X
                </button>
            )}
    </div>
  )
}

export default SearchBar