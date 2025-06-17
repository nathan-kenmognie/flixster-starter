import "./movie-card.css";
import fallBackImg from "../../assets/default-movie-img.jpg";

let MovieCard = ({ movie, onClick, addFavorite, isFavorite, addWatched, isWatched }) => {
  const handleEmptyPoster = () => {
    return movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : fallBackImg;
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    addFavorite(movie);
  };

  const handleWatchedClick = (e) => {
    e.stopPropagation();
    addWatched(movie);
  };

  return (
    <main className="movie-card" onClick={onClick}>
      <img src={handleEmptyPoster()} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Rating: {movie.vote_average}</p>

      <div className="card-buttons">
        <button onClick={handleLikeClick}>
          {isFavorite(movie) ? "❤️" : "🤍"}
        </button>

        <button onClick={handleWatchedClick}>
          {isWatched(movie) ? "✅ Watched" : "📺 Mark Watched"}
        </button>
      </div>
    </main>
  );
};

export default MovieCard;
