import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../movieApi';
import MovieList from '../components/MovieList';
import Loader  from '../components/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetchTrendingMovies()
      .then(({ results }) => {
        setMovies(results);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <>
        <h1>Trending Movies For Now</h1>
        <MovieList movies={movies} />
        {loader && <Loader />}
    </>
  );
};

export default Home;