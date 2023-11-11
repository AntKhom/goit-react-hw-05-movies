import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "movieApi";
import personPlaceholder from "../img/person-placeholder.webp";
import Loader from "./Loader";
import { Foto, Item, List, Name } from "./Casts.styled";

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
    <List>
      {movieCast.length > 0 ? (
        movieCast.map(({ id, profile_path, character, name }) => (
          <Item key={id}>
            {profile_path ? (
              <Foto
                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                alt={name}
              />
            ) : (
                <Foto
                    src={personPlaceholder}
                    alt={name}
                />
            )}
            <Name>{name}</Name>
            <p><b>Character:</b> {character}</p>
          </Item>
        ))) : (
            <p> Sorry, there isn't any info</p>
        )}
    {loader && <Loader />}
    </List>
  );
}

export default Cast;