import "./movie-card.css";





let MovieCard = ({movie}) =>{
    return (
        <main className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <h3>{movie.title}</h3>

            <p>Rating: {movie.vote_average}</p>
        </main>
    );
}

export default MovieCard