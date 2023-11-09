import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import Home from "../pages/Home";


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home/>}></Route>
          <Route path="/movies" element={<div>Movies</div>}></Route>
          <Route path="/movies/:movieId" element={<div>MovieDetails</div>}>
            <Route path="cast"></Route>
            <Route path="reviews"></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
