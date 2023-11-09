import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "movieApi";
import Loader from "./Loader";

const Review = () => {
    const { movieReviews, setMovieReviews } = useState({});
    const { loader, setLoader } = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        setLoader(true);
        fetchMovieReviews(movieId)
            .then(({ reviews }) => {
                setMovieReviews(reviews);
            })
            .finally(() => {
                setLoader(false)
            });
    }, [movieId])
    
    return (
        <>
            {movieReviews.length > 0 ? (
                movieReviews.map(({ id, author, content }) => {
                    return (
                        <li key={id}>
                            <li>
                                <b> Author: {author}</b>
                            </li>
                            <li>{content}</li>
                        </li>
                    );
                })
            ) : (
                <p>Sorry, we don`t have any review for this movie 🤷🏼‍♂️</p>
            )}
        {loader && <Loader />}            
        </>
    )
}

export default Review;