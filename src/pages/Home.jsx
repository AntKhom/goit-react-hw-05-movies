import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../movieApi';
import MovieTrendingList from '../components/MovieTrendingList';
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
        <MovieTrendingList movies={movies} />
        {loader && <Loader />}
    </>
  );
};

export default Home;