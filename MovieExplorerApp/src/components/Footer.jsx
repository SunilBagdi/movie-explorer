import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {

  const quickLink =  [
    {label : 'Home', to: '/'},
    {label : 'Favorites', to: '/favorites'},
    {label : 'About', to: '/about'}
  ]

  const footerLinkClass = ({isActive}) => {
    `text-sm transition-colors duration-200 w-fit
    ${isActive ? 'test-yellow-400 font-medium':
      'text-gray-400 hover:text-yellow-400'
    }`
  }

  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand Section */}
        <div className="flex flex-col gap-3">
          <span className="text-2xl font-bold text-yellow-400 tracking-wide">
            🎬 MovieExplorer
          </span>
          <p className="text-sm leading-relaxed">
            Discover, explore, and save your favorite movies — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            {
            quickLink.map((link) => (
              <li
                key={link.label}
                className="hover:text-yellow-400 cursor-pointer transition-colors duration-200 w-fit"
              >
                <NavLink to={link.to} end={link.to === '/'} className={footerLinkClass}>
                  → {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest">
            About
          </h3>
          <p className="text-sm leading-relaxed">
            Built with ❤️ using React + Tailwind CSS.
            <br />
            Powered by TMDB API.
          </p>
        </div>

      </div>
      <div className="border-t border-yellow-800 py-4 text-center text-xl text-gray-600">
        © {new Date().getFullYear()} MovieExplorer — All rights reserved.
      </div>
    </footer>
  )
}

export default Footer