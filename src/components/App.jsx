import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import Home from "../pages/Home";
import MovieDetails from "pages/MovieDetails";
import Cast from "./Cast";
import Review from "./Review";


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home/>}></Route>
          <Route path="/movies" element={<div>Movies</div>}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>}></Route>
            <Route path="reviews" element={<Review/> }></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
