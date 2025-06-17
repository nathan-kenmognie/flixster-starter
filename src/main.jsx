import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import MovieList from './components/movie-list/movie-list.jsx'
import LoadMoreBtn from './components/load-more-btn/load-more-btn.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <title>Flixster</title>

    <div className="app-container">
      <div className="main-content">
        <MovieList />
      </div>
    </div>
    
  </StrictMode>
)
