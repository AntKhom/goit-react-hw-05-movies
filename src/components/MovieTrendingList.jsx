import React from "react";
import MovieItem from "./MovieItem";

const MovieTrendingList = ({ movies }) => {
    return (
        <ul>
            {movies.map(movie =>
                <MovieItem
                    key={movie.id}
                    poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    title={movie.title}
                    // showModal={showModal}
                />
            )}
        </ul>
    )
}

export default MovieTrendingList;