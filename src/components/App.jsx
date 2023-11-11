import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
// import Home from "../pages/Home";
// import MovieDetails from "pages/MovieDetails";
// import Cast from "./Cast";
// import Review from "./Review";
// import Movies from "pages/Movies";

import { lazy, Suspense } from 'react';
import Loader from "./Loader";

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Review = lazy(() => import('./Review'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home/>}></Route>
            <Route path="/movies" element={<Movies/>}></Route>
            <Route path="/movies/:movieId" element={<MovieDetails/>}>
              <Route path="cast" element={<Cast/>}></Route>
              <Route path="reviews" element={<Review/> }></Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
