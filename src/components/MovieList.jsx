import React from "react";
import MovieItem from "./MovieItem";
import defaultPoster from '../img/poster-placeholder.webp'



const MovieList = ({ movies }) => {
    return (
        <ul>
            {movies.map(movie =>
                <MovieItem
                    id={movie.id}
                    poster={movie.poster_path ?
                        `https://image.tmdb.org/t/p/w200${movie.poster_path}`:
                         defaultPoster    
                    }
                    title={movie.title}
                    // showModal={showModal}
                />
            )}
        </ul>
    )
}

export default MovieList;