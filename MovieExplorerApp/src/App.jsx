import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import { Home } from './pages/Home';
import Favorites from './pages/Favorites';
import About from './pages/About';
import MovieDetails from './pages/MovieDetails';


function App() {

  return (
   <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/favorites' element={<Favorites/>} />
        <Route path='/about' element={<About />} />
        <Route path='movie/:id' element={<MovieDetails />} />
      </Route>
   </Routes>
  )
}

export default App
