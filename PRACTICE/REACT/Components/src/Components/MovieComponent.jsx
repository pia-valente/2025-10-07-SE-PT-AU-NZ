import MovieList from "./MovieList";
import SingleMovie from "./SingleMovie";

function MovieComponent () {
 return (
    <div className="movie-container">
      <h2>Movies</h2>
      <ul className="movie-list">
        {MovieList.map((movie) => (
          <SingleMovie key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

 

export default MovieComponent;


/*
MovieList.map((movie) => … ) → loops through each movie in the MovieList array.
For each movie, it creates a <SingleMovie /> component.
movie={movie} → passes the current movie object as a prop to SingleMovie.
key={movie.id} → React uses this unique key to efficiently track list items when updating the DOM.
*/