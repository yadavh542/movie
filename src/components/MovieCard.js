import React from 'react';
import './Movie.css';
import { useGlobalContext } from '../context';

const MovieCard = ({movieTitle,poster,imdbID,year}) => {
  const {movie} = useGlobalContext();

  return (
          <div className="movieCard">
            <div className="movieCardInfo">          
            <h2>{movieTitle}</h2>
            <img src={poster} alt={imdbID} />
            <h3>{year}</h3>
            </div>
          </div>
  )
}

export default MovieCard