import React from "react";
import moviesList from "./MovieContext";

import { tmp } from "./App";
class MoviesList extends React.Component {
  render() {
    // Get movies list using MoviesContext.

    return (
      <tmp.Consumer>
        {(setMovie) => {
          return (
            <div id="movies-table">
              <style>{`
        td { padding : 20px; }
        tr:hover { background: #3374C2}
        `}</style>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="table-row">
                    <td>Movie Title</td>
                  </tr>
                  {moviesList.map((item) => {
                    return (
                      <tr>
                        <td key={item.id} onClick={() => setMovie(item)}>
                          {item.title}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        }}
      </tmp.Consumer>
    );
  }
}

export default MoviesList;
