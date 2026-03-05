import MovieList from "./MovieList"; //This imports the MovieList array from the MovieList.js

function SingleMovie ({ movie }) { //This defines a React functional component called Movie. { movie } is destructuring the props.
  return (
    <li className="movie">
      <img src={movie.poster} alt={movie.title} />
      <p>
        {movie.title} by {movie.director} was released in {movie.year}
      </p>
      <p>Rating: {movie.rating}</p>
    </li>
  );
};

export default SingleMovie;