import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard';

const MovieList = props => {
  const [movies] = useState([])
 // console.error('Server Error', error);    
 

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`}>
        <MovieCard key={movie.id} movie={movie} />
      </Link>
    ))}
    </div>
  );
}

export default MovieList;
