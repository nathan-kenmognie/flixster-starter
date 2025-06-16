import "./movie-card.css";





let MovieCard = ({movie, onClick}) =>{




    return (
        <main className="movie-card" onClick={onClick}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <h3>{movie.title}</h3>

            <p>Rating: {movie.vote_average}</p>
            <button className="Favorite"></button>
        </main>
    );
}

export default MovieCard