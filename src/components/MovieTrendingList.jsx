import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {
    return (
        <ul>
            {movies.map(movie =>
                <MovieItem
                    id={movie.id}
                    poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    title={movie.title}
                    // showModal={showModal}
                />
            )}
        </ul>
    )
}

export default MovieList;