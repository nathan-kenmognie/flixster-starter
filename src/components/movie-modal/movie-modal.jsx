import "./movie-modal.css"

let MovieModal = ({movie}) =>{
    return(
        <dialog open>
            
            {movie.title}

        </dialog>
    )
}

export default MovieModal