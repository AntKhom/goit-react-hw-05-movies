import { NavLink, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route path="/" element={<div>Home</div>}></Route>
          <Route path="/movies" element={<div>Movies</div>}></Route>
          <Route path="/movies/:movieId" element={<div>MovieId</div>}></Route>
        </Route>
      </Routes>

    </div>
  );
};
