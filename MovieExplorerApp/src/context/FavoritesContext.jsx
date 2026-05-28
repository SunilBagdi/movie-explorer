import { createContext, useContext, useEffect, useState } from "react";


// context create krna 
const FavoritesContext = createContext()

export function FavoritesProvider({children}) {
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('favorites')
        return saved ? JSON.parse(saved) : []
    })
    
    const addFavorite = (movie) => {
        setFavorites((prev) => {
            if (prev.find((m) => m.id === movie.id)){
                return prev
            }
            return [...prev, movie]
        })
    }

    const removeFavorite = (id) => {
        setFavorites((prev) => prev.filter((movie) => movie.id !== id))
    }

    const isFavorite = (id) => {
        return favorites.some((movie) => movie.id === id)
    }

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    return(
        <FavoritesContext.Provider value={{favorites, addFavorite, removeFavorite, isFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )   
}

// hook create kiya taki har jgh 2 line na likhni pd bs esi se kaam ho jaye
export function useFavorites() {
    return useContext(FavoritesContext)
}