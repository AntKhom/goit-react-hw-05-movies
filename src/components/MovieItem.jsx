import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ id, title, poster }) => {
    return (
        <Link key={id} to={`/movies/${id}`}>
            <h2>{title}</h2>
            <img src={poster} alt={title} />
        </Link>
    )
}

export default MovieItem;