import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from "react-router-dom";

import { fetchMovieById } from '../movieApi';
import Loader  from '../components/Loader';
import BackButton from 'components/BackButton';
import defaultPoster from '../img/poster-placeholder.webp'
import { List, MovieInfo, Poster, Title, Link } from './MovieDetails.styled';



const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({});
    const [loader, setLoader] = useState(false);
    const { movieId } = useParams();
    const location = useLocation();
    const backLink = location.state?.from ?? `/`;
    
    useEffect(() => {
    setLoader(true);
    fetchMovieById(movieId)
      .then(setMovieDetails)
      .finally(() => {
        setLoader(false);
      });
    }, [movieId]);
    
    const {poster_path, title, genres, overview, vote_average, release_date } = movieDetails;

  return <>
      <BackButton to={backLink} />
      <MovieInfo >
          <div>
              {poster_path ? 
              <Poster
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
              /> :
              <Poster
              src={defaultPoster}
              alt={'defaultPoster'}
              />
          }
          </div>
          <div>
            {title && (
              <Title>
                {title} {release_date.substr(0, 4)}
              </Title>
            )}

            <p>User Score: {vote_average && Math.floor(vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            {genres && <p>{genres.map(({ name }) => name).join(', ')}</p>}
          </div>
        </MovieInfo>
        <section>
        <h3>Additional information</h3>
        <List>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
        </li>
      </List>
           
        </section>

      <Outlet />

        {loader && <Loader />}
    </>
};

export default MovieDetails;
