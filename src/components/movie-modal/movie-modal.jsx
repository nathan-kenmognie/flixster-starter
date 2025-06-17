import { useEffect, useState } from "react"
import fallBackImg from "../../assets/default-movie-img.jpg"
import "./movie-modal.css"

let MovieModal = ({show, onClose, movie}) =>{
    if (!show || !movie) return null;
    const [videoKey, setVideoKey] = useState(null)
    const [runtime, setRunTime] = useState(null)
    const [genres, setGenres] = useState(null)


    const apiKey = import.meta.env.VITE_API_KEY

    useEffect(()=>{
        if (movie){
            const fetchTrailer = async() =>{
            try{
                
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}`)
                const data = await response.json()
                const trailer = data.results.find(video => video.site ==="YouTube" && video.type ==="Trailer");
                if (trailer){
                    setVideoKey(trailer.key)
                } else{
                    setVideoKey(null)
                }
            }
            catch(err){
                console.log(err.message)
            }
        };
        fetchTrailer();
        }
        
    }, [movie])




    



    const handleEmptyPoster = (movie) =>{

        if (!movie.poster_path){
            return fallBackImg

        }else{
            return `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        }

    }


    useEffect(()=>{
        if (movie) {
            const fetchRunTime = async() =>{
                try {

                    const url = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}`
                    const response = await fetch(url);
                    const data = await response.json()
                    setRunTime(data.runtime)


                    
                } catch (error) {
                    console.log(error.message)
                    setRunTime(null)
                }
            }
            const fetchGenres = async() =>{
                try {
                    const url  = `https://api.themoviedb.org/3/genre/movie/list?language=en`
                    const response = await fetch(url)
                    const data = await response.json()
                    setGenres(data.genres)

                    
                } catch (error) {
                    console.log(error.message)
                }
            }

            fetchRunTime()
            fetchGenres()

        }
    },[movie,genres])


    const handleGenreTags = (id) =>{
        switch(id){
            case 28:
                return "Action";
            case 12:
                return "Adventure";
            case 16:
                return "Animation";
            case 35:
                return "Comedy";
            case 80:
                return "Crime";
            case 99:
                return "Documentary";
            case 18:
                return "Drama";
            case 10751:
                return "Family";
            case 14:
                return "Fantasy";
            case 36:
                return "History";
            case 27:
                return "Horror";
            case 10402:
                return "Music";
            case 9648:
                return "Mystery";
            case 10749:
                return "Romance";
            case 878:
                return "Science Fiction";
            case 10770:
                return "TV Movie";
            case 53:
                return "Thriller";
            case 10752:
                return "War";
            case 37:
                return "Western";
            default:
                return null;
        }

    }




    
   




    return(
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e)=>{e.stopPropagation()}}>
                <div className="modal-header">
                    <button onClick={onClose}>X</button>
                </div>
                <div className="modal-body">
                    <img src={handleEmptyPoster(movie)}/>
                    <h1>{movie.title}</h1>
                    
                    <h3>Rating: {movie.vote_average}</h3>
                    <h3>Release Year: {movie.release_date}</h3>
                    <h3>Language: {movie.original_language}</h3>
                    <h3>Duration: {runtime ? `${runtime} mins` : "Loading..."}</h3>
                    <h3>Description: {movie.overview}</h3>
                    <h3>Genre: {" "} {movie.genre_ids && movie.genre_ids.length > 0
                        ? movie.genre_ids.map(id => handleGenreTags(id)).join(", ")
                        : "N/A"}
                    </h3>
                </div>

                <div className="trailer">

                    {videoKey ? (
                        <iframe
                            width="90%"
                            height="400"
                            src={`https://www.youtube.com/embed/${videoKey}`}
                            title="Movie Trailer"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            vq="vq1080"
                        ></iframe>) : (<p>No trailer available</p>)
                    }

                </div>

            </div>

        </div>

    )
}

export default MovieModal