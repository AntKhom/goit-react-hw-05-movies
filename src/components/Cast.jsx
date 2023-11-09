import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "movieApi";
import personPlaceholder from "../img/person-placeholder.webp";
import Loader from "./Loader";

const Cast = () => {
    const [movieCast, setMovieCast] = useState({});
    const [loader, setLoader] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        setLoader(true);
        fetchMovieCredits(movieId)
            .then(({ cast }) => {
                setMovieCast(cast);
            })
            .finally(() => {
                setLoader(false)
            });
    }, [movieId])



    return (
    <>
      {movieCast.length > 0 ? (
        movieCast.map(({ id, profile_path, character, name }) => (
          <li key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
            ) : (
                <img width='200px' height='300px'
                    src={personPlaceholder}
                    alt={name}
                />
            )}
            <p>{name}</p>
            <p>Character : {character}</p>
          </li>
        ))) : (
            <p> Sorry, there isn't any info</p>
        )}
    {loader && <Loader />}
    </>
  );
}

export default Cast;