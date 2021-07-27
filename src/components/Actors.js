import React from "react";
import { actors } from "../data";

function Actors() {
  return (
     <div>
       <h1>Actors Page</h1>
       <div>{actors.map(actor => {
          return (
            <div key={actor.name}>
              <h2>{actor.name}</h2>
              <p>Movies:</p>
              <ul>{actor.movies.map(movie => <li key={movie}>{movie}</li>)}</ul>
            </div>
         )})}
       </div>
     </div>
  )
}

export default Actors;
