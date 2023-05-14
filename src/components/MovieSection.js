import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
//import { AppContext } from '../context';
import { useGlobalContext } from '../context';
import MovieCard from './MovieCard';
import './Movie.css';

const MovieSection = () => {
  //const name = useContext(AppContext);
  const {movie,isLoading} = useGlobalContext();

  // if(isLoading(true)){
  //   return(
  //     <div>
  //       <p>Loading...</p>
  //     </div>
  //   )
  // }else
  
  return (
    <div className="movieSection">
      
      {movie.map((curMovie) => {
        const movieTitle = curMovie.Title.substring(0,15);
        return (
          
          <NavLink to={`movie/${curMovie.imdbID}`} key={curMovie.imdbID}> 
          <MovieCard 
          movieTitle={curMovie.Title.length>15 ? `${movieTitle}...`:movieTitle }
          poster={curMovie.Poster}
          year={curMovie.Year}
          />
          </NavLink>
        )
      })}
    
    </div>
  )
 
}

export default MovieSection