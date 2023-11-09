import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from "react-router-dom";

import { fetchMovieById } from '../movieApi';
import Loader  from '../components/Loader';


const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({});
    const [loader, setLoader] = useState(false);
    const { movieId } = useParams();
    
    useEffect(() => {
    setLoader(true);
    fetchMovieById(movieId)
      .then(setMovieDetails)
      .finally(() => {
        setLoader(false);
      });
    }, [movieId]);
    
    const { poster_path, title, genres, overview, vote_average, release_date } = movieDetails;

    return <>
        <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
        />
        <div>
          {title && (
            <h2>
              {title} {release_date.substr(0, 4)}
            </h2>
          )}

          <p>User Score: {vote_average && Math.floor(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          {genres && <p>{genres.map(({ name }) => name).join(', ')}</p>}
        </div>
        <container>
            <h3>Additional information</h3>
            <li>
                <Link to="cast">Cast</Link>
            </li>
            <li>
                <Link to="reviews">Reviews</Link>
            </li>
        </container>

      <Outlet />

        {loader && <Loader />}
    </>
};

export default MovieDetails;
