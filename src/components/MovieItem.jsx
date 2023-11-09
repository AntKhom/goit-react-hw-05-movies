import React from 'react';

const MovieItem = ({ id, title, poster}) => {
    return (
        <li key={id}>
            <h2>{title}</h2>
            <img src={poster} alt={title} />
        </li>
    )
}

export default MovieItem;