import { useState, useEffect } from "react";
import MovieCard from "../movie-card/movie-card";
import "./movie-list.css";

import LoadMoreBtn from "../load-more-btn/load-more-btn";

let MovieList = () => {


    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('')
    const [inputValue, setInputValue] = useState('');


    const apiKey = import.meta.env.VITE_API_KEY;

    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&include_adult=false&page=${page}&include_video=false&language=en-US.desc`

    useEffect(()=>{


        const fetchMovies = async() =>{
            try{
                setLoading(true)
                const response = await fetch(url);
                if (!response.ok){
                    throw new Error("Failed to fetch data");
                }else{
                    console.log("Successfully accessed data");

                    const data = await response.json();

                    

                    if (page===1){
                        setMovies(data.results);
                        setLoading(false)

                    }else if (page>1){
                        setMovies(prev => [...prev, ...data.results]);
                        setLoading(false)

                    }


                }
            }catch (error){
                console.error(error.message);
                setLoading(false)

            }
        }


        


        fetchMovies();

    },[page,searchQuery])



    const handleSearchClick = async () => {
        setSearchQuery(inputValue);
        setPage(1)
        const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&include_adult=false&language=en-US&page=${page}`
        const searchResponse = await fetch(searchUrl);
        const searchData = await searchResponse.json();
        const filteredData = searchData.results.filter(movie =>
            movie.title && movie.overview && movie.poster_path);
        setMovies(filteredData)
    };

    const nowPlaying = async() =>{
        setPage(1)
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results)





    }


    const loadMoreFunc = () => setPage(prev => prev + 1);

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (loading){
        return <p>Loading...</p>
    }


    return(
    <div>

        <div className="search-bar">
            <input type="text" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} placeholder="Search" />
            <button id="search-btn" onClick={handleSearchClick}>search</button>
            <button id="now-playing-btn" onClick={nowPlaying}>Now Playing</button>
        </div>


        <div className="movie-list">
            {movies.map((item,idx)=>(
                <MovieCard
                    key={idx}
                    movie={item}
                />
        ))}
        </div>

        <LoadMoreBtn loadMore={loadMoreFunc}/>
    </div>

)

  
};

export default MovieList;