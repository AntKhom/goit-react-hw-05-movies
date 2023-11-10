import { useState, useEffect } from "react";
import Searchbar from "components/Searchbar";
import { searchMovie } from "movieApi";
import Loader from "components/Loader";
import MovieList from "components/MovieTrendingList";

const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        setLoader(true);
        searchMovie(query)
            .then(res => {
                if (res.results === 0) {
                    // toast(`Sorry, for ${query} query nothing was found`);
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
            {movies.length > 0 ? (
                <MovieList />
            ) : (
                <p> Sorry, for {query} query nothing was found</p>
            )}
        {loader && <Loader/>}
        </>
    )
}

export default Movies;