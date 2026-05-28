import React from 'react'
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {

    const navLinkClass = ({isActive}) =>
    ` text-sm font-medium transition-colors duration-200 cursor-pointer
        ${isActive ? 'text-yellow-400 border-b-2 border-yellow-400 pb-0.5' 
        : 'text-gray-300 hover:text-yellow-400'} `

    const {isDark, toggleTheme} = useTheme()

  return (

    <nav className='bg-gray-900 dark:bg-gray-950 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-black/40'>
        <NavLink to="/" className='text-xl font-bold text-yellow-400 tracking-wide'>
            MovieExplorer
        </NavLink>

        <ul className='flex gap-6 items-center'>
            <li>
                <NavLink to='/' end className={navLinkClass}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/favorites' end className={navLinkClass}>
                    Favorites
                </NavLink>
            </li>
            <li>
                <NavLink to='/about' end className={navLinkClass}>
                    About
                </NavLink>
            </li>
        </ul>

        <button onClick={toggleTheme}
                className='text-xl cursor-pointer hover:scale-125 transition-transform duration-200'>
            {isDark ? '☀️' : '🌙'}
        </button>
        
    </nav>
  )
}

export default Navbar