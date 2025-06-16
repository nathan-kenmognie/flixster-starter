import { useEffect, useState } from "react"
import "./movie-modal.css"

let MovieModal = ({show, onClose, movie, addFavorite, isFavorite}) =>{
    if (!show || !movie) return null;
    const [videoKey, setVideoKey] = useState(null)


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
    

    const handleLikeClick = (e) =>{
        addFavorite(movie); 
        e.stopPropagation()
    }



    
   




    return(
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e)=>{e.stopPropagation()}}>
                <div className="modal-header">
                    <button onClick={onClose}>X</button>
                </div>
                <div className="modal-body">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                    <h1>{movie.title}</h1>
                    
                    <h3>Rating: {movie.vote_average}</h3>
                    <h3>Release Year: {movie.release_date}</h3>
                    <h3>Language: {movie.original_language}</h3>
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
                <button onClick={handleLikeClick}>
                    {isFavorite ? "❤️" : "🤍" }
                </button>
            </div>

        </div>

    )
}

export default MovieModal