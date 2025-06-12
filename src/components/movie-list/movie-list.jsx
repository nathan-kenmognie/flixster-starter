import React, { useState, useEffect } from "react";
import "./movie-list.css";

let MovieList = () => {
  const [users, setUsers] = useState([]);        // Store fetched data
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);      // Error handling

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const session_Id = import.meta.env.VITE_SESSION_ID;

    fetch(`https://api.themoviedb.org/3/account/22073556/rated/movies?api_key=${apiKey}&session_id=${session_Id}&language=en-US&page=1&sort_by=created_at.asc`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty array means run once when component mounts

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default MovieList;