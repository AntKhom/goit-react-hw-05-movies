import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "components/Searchbar";
import { searchMovie } from "movieApi";
import Loader from "components/Loader";
import MovieList from "components/MovieList";


const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [movies, setMovies] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);
    
    const movie = searchParams.get('query') ?? '';

    useEffect(() => {
        if (!movie) {
            console.log('No query');
            return;
        }
        setLoader(true);
        searchMovie(movie)
            .then(res => {
                if (res.results.length === 0) {
                    toast(`Sorry, for ${movie} query nothing was found`);
                    console.log('No movies found');
                }
                setMovies(res.results);
            })
            .catch(error => setError(error))
            .finally(() => {
                setLoader(false);
            });
    }, [movie]);

    const submitHandler = query => {
        setSearchParams({query});
        console.log(query);
        setMovies([]);
    // setPage(1);
    };
    


    return (
        <>
            <h2>Search movies</h2>
            {error && <h2>{error.message}</h2>}
            <Searchbar value={movie} onSubmit={submitHandler} />
            {(error || movies.length === 0) ? (
                <p>Search your movie</p>
            ) : (
                <MovieList movies={movies} />
            )}
            {loader && <Loader />}
            <ToastContainer/>
        </>
    )
}

export default Movies;