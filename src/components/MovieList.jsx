import React from "react";
import MovieItem from "./MovieItem";
import defaultPoster from '../img/poster-placeholder.webp'

import {List} from "./MovieList.styled"



const MovieList = ({ movies }) => {
    return (
        <List>
            {movies.map(movie =>
                <MovieItem
                    id={movie.id}
                    poster={movie.poster_path ?
                        `https://image.tmdb.org/t/p/w300${movie.poster_path}`:
                         defaultPoster    
                    }
                    title={movie.title}
                />
            )}
        </List>
    )
}

export default MovieList;