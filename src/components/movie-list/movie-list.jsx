import { useState, useEffect } from "react";
import MovieCard from "../movie-card/movie-card";
import "./movie-list.css";
import MovieModal from "../movie-modal/movie-modal";

import LoadMoreBtn from "../load-more-btn/load-more-btn";

let MovieList = () => {


    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [sortParameter, setSortParameter] = useState("")
    const [favorites, setFavorites] = useState([])



    const apiKey = import.meta.env.VITE_API_KEY;

    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&include_adult=false&page=${page}&include_video=false&language=en-US.desc`;
    useEffect(() => {
    const fetchMovies = async () => {
        setLoading(true);
        try {
        let endpoint = "";

        if (searchQuery) {
            endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&include_adult=false&language=en-US&page=${page}`;
        } else if (sortParameter) {
            endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&sort_by=${sortParameter}&page=${page}`;
        } else {
            endpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&include_adult=false&language=en-US&page=${page}`;
        }

        const response = await fetch(endpoint);
        const data = await response.json();

        const filteredData = data.results.filter(
            (movie) => movie.title && movie.overview && movie.poster_path && movie.release_date && movie.vote_average
        );

        setMovies(prev => (page === 1 ? filteredData : [...prev, ...filteredData]));
        } catch (err) {
        setError("Failed to fetch movies.");
        } finally {
        setLoading(false);
        }
    };

  fetchMovies();
}, [page, searchQuery, sortParameter]);



    const handleSearchClick = async () => {
        setSearchQuery(inputValue);
        setSortParameter("")
        setPage(1)
        const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&include_adult=false&language=en-US&page=${page}`
        const searchResponse = await fetch(searchUrl);
        const searchData = await searchResponse.json();
        const filteredData = searchData.results.filter(movie =>
            movie.title && movie.overview && movie.poster_path);
        setMovies(filteredData);
    };

    const nowPlaying = async() =>{
        setPage(1);
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);

    }

    const handleMovieClick = async (id,name) =>{
        setShowModal(true);

        try{

            const results = movies.filter((movie)=> id === movie.id)

            setSelectedMovie(results[0])




        }catch(err){
            console.log(err.message);
        }
    }

    const handleClose = () =>{
        setShowModal(false);
        setSelectedMovie(null);
    }

    const loadMoreFunc = () => setPage(prev => prev + 1);

    const addFavorites = (movie) =>{
        if (!favorites.includes(movie)){
            setFavorites([...favorites, movie])
            console.log(favorites.length)
            console.log(favorites)
        }

    }

    const isFavorite = (movie) => {
        return favorites.includes(movie)
    }

    const favoritesPage = () =>{
        setMovies(favorites)
    }



    const selectSortFunc = (e) => {
        const selected = e.target.value;
        let newSortParam = "";

        if (selected === "A-Z") {
            newSortParam = "original_title.asc";
        } else if (selected === "Z-A") {
            newSortParam = "original_title.desc";
        } else if (selected === "oldest") {
            newSortParam = "primary_release_date.asc";
        } else if (selected === "newest") {
            newSortParam = "primary_release_date.desc";
        } else if (selected === "vote-average") {
            newSortParam = "vote_average.desc";
        }

        
        setPage(1); 
        setSearchQuery("");
        setSortParameter(newSortParam);
    };






    if (error) {
        return <p>Error: {error}</p>;
    }

    if (loading){
        return <p>Loading...</p>
    }

    const searchBar =         

        <div className="search-bar">
            <input type="text" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} placeholder="Search" />
            <button id="search-btn" onClick={handleSearchClick}>Search</button>
            <button id="now-playing-btn" onClick={nowPlaying}>Now Playing</button>
        </div>
    
    const sortSelection = 
        <div>
            <select name="sort-list" onChange={selectSortFunc}>
                <option value="">Sort by</option>
                <option value="A-Z">Title (A-Z)</option>
                <option value="Z-A">Title (Z-A)</option>
                <option value="oldest">Oldest</option>
                <option value="newest">Newest</option>
                <option value="vote-average">Rating</option>
            </select>
        </div>

    const favoritesBtn = <button className="favorites-button" onClick={(e)=>{favoritesPage(); e.stopPropagation()}}> Favorites</button>

    return(
    <div>
        <header>
        {searchBar}

        {favoritesBtn}


        {sortSelection}

        </header>
        <div className="movie-list">
            {movies.map((item,idx)=>(
                <MovieCard
                    key={idx}
                    movie={item}
                    onClick={()=>handleMovieClick(item.id, item.title)}
                />
        ))}
        </div>
        <MovieModal show={showModal} onClose={handleClose} isFavorite ={isFavorite(selectedMovie)} addFavorite={addFavorites} movie={selectedMovie}/>

        <LoadMoreBtn loadMore={loadMoreFunc}/>

        <footer></footer>


    </div>

)

  
};

export default MovieList;