import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "components/Searchbar";
import { searchMovie } from "movieApi";
import Loader from "components/Loader";
import MovieList from "components/MovieList";


const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        if (!query) {
            return;
        }
        setLoader(true);
        searchMovie(query)
            .then(res => {
                if (res.results.length === 0) {
                    toast(`Sorry, for ${query} query nothing was found`);
                    console.log('No movies found');
                }
                setMovies(res.results);
            })
            .catch(error => setError(error))
            .finally(() => {
                setLoader(false);
            });
    }, [query]);

    const submitHandler = query => {
        setQuery(query);
        console.log(query);
        setMovies([]);
    // setPage(1);
    };
    


    return (
        <>
            <h2>Search movies</h2>
            {error && <h2>{error.message}</h2>}
            <Searchbar value={query} onSubmit={submitHandler} />
            {(error || movies.length === 0) ? (
                <p> Sorry, for {query} query nothing was found</p>
            ) : (
                <MovieList movies={movies} />
            )}
            {loader && <Loader />}
            <ToastContainer/>
        </>
    )
}

export default Movies;