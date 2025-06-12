import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import MovieCard from './components/movie-card/movie-card.jsx'
import MovieList from './components/movie-list/movie-list.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieCard />
    <MovieList />
    
  </StrictMode>
)
