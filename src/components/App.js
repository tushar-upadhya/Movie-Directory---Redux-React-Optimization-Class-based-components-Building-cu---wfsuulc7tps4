import React, { useState } from "react";
import "../styles/App.css";
import Movie from "./Movie";
import MoviesList from "./MoviesList";
export const tmp = React.createContext();
export const tmp2 = React.createContext();
const App = () => {
  const [movie, setMovie] = useState({});
  return (
    <div id="main">
      <h1>Movie List</h1>
      <tmp.Provider value={setMovie}>
        <MoviesList />
      </tmp.Provider>
      <tmp2.Provider value={movie}>
        <Movie />
      </tmp2.Provider>
    </div>
  );
};

export default App;
