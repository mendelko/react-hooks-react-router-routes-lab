import React from "react";
import { movies } from "../data";

function Movies() {
  // const details = movies.map(movie => {
  //   <div>
  //     <h2>{movie.title}</h2>
  //     <p>{movie.time}</p>
  //     <ul> Genres:
  //       {movie.genres.map((genre) => <li>{movie.genre}</li>)}
  //     </ul>
  //   </div>
  // })

  return (
    <div>
      <h1>Movies Page</h1>
      <div>{movies.map(movie => { 
        return (
        <div key={movie.title}>
        <h2>Name: {movie.title}</h2>
        <p>Time: {movie.time}</p>
        <p>Genres:</p>
        <ul> 
          {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
        </div>
      )})}
      </div>
      </div>
  )
}

export default Movies;
