import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { AuthProvider, useAuth } from "./context/AuthContext"; // NEW

import Layout from "./components/layout";
import { Home } from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import Login from "./pages/Login";       // NEW
import Register from "./pages/Register"; // NEW

// Protected Route component - login ke bina access nahi
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-yellow-400 text-xl">Loading...</div>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
  <AuthProvider>
    <ThemeProvider>
      <FavoritesProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </FavoritesProvider>
    </ThemeProvider>
  </AuthProvider>
  );
}

export default App;
