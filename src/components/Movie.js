import React from "react";
import { tmp2 } from "./App";
class Movie extends React.Component {
  render() {
    // If no movie is selected, show message - "Invalid Id".

    return (
      <tmp2.Consumer>
        {(item) => {
          return (
            <div id="movie-banner">
              {JSON.stringify(item) === "{}" ? (
                "Invalid Id"
              ) : (
                <>
                  <h2>{item.title}</h2>
                  <h2>{item.year}</h2>
                  <h2>{item.director}</h2>
                </>
              )}
            </div>
          );
        }}
      </tmp2.Consumer>
    );
  }
}

export default Movie;
