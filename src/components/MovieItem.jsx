import React from 'react';
import { useLocation } from 'react-router-dom';
import { Links, Posters, Titles } from './MovieItem.styled';

const MovieItem = ({ id, title, poster }) => {
    const location = useLocation();
    return (
        <Links key={id} to={`/movies/${id}`} state={{ from: location }}>
            <Posters src={poster} alt={title}/>
            <Titles>{title}</Titles>
        </Links>
    )
}

export default MovieItem;