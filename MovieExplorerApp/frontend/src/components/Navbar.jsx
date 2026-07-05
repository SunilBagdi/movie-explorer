import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 cursor-pointer
     ${isActive
       ? "text-yellow-400 border-b-2 border-yellow-400 pb-0.5"
       : "text-gray-300 hover:text-yellow-400"
     }`;

  const handleLogout = () => {
    logout();
    navigate("/login");
    setShowDropdown(false);
  };

  return (
    <nav className="bg-gray-900 dark:bg-gray-950 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-black/40">
      {/* Logo */}
      <NavLink to="/" className="text-md font-bold text-yellow-400 tracking-wide">
        <div className="flex gap-2 items-center">
          <img src={logo} className="w-7 bg-gray-200 rounded p-0.5" alt="logo" />
          <p>MovieExplorer</p>
        </div>
      </NavLink>

      {/* Nav Links */}
      <ul className="flex gap-4 items-center">
        <li><NavLink to="/" end className={navLinkClass}>Home</NavLink></li>
        <li><NavLink to="/favorites" end className={navLinkClass}>Favorites</NavLink></li>
        <li><NavLink to="/about" end className={navLinkClass}>About</NavLink></li>
      </ul>

      {/* Right Side: Theme + User */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="text-xl cursor-pointer hover:scale-125 transition-transform duration-200"
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        {/* User Section */}
        {user ? (
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 
                         px-3 py-1.5 rounded-lg transition-colors duration-200"
            >
              {/* Avatar */}
              <div className="w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="text-sm text-gray-200 hidden sm:block">
                {user.name.split(" ")[0]} {/* Sirf first name */}
              </span>
              <span className="text-gray-400 text-xs">▼</span>
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 top-12 bg-gray-800 border border-gray-700 
                              rounded-xl shadow-2xl w-48 py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-700">
                  <p className="text-white font-semibold text-sm">{user.name}</p>
                  <p className="text-gray-400 text-xs truncate">{user.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2.5 text-red-400 hover:bg-gray-700 
                             hover:text-red-300 transition-colors text-sm"
                >
                  🚪 Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <NavLink
            to="/login"
            className="bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-lg 
                       font-semibold text-sm hover:bg-yellow-500 transition-colors"
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
