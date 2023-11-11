import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieItem = ({ id, title, poster }) => {
    const location = useLocation();
    return (
        <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
            <img src={poster} alt={title} width='250px' />
            <h2>{title}</h2>
        </Link>
    )
}

export default MovieItem;