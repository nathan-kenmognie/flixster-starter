import React from "react";
import ReactDOM from "react-dom";
import MovieList from "../movie-list/movie-list";

import "./movie-card.css";



let MovieCard = () =>{
    return (
        <main className="movie-card">
            <img src="https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg" alt="Movie Poster" />
            <h2>Movie Title</h2>
            <h3>Rating</h3>
        </main>
    );
}

export default MovieCard