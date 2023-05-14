import React, { useEffect, useState } from 'react';
import './Movie.css';
import { useGlobalContext } from '../context';

const MovieDetails = ({movieTitle,poster,year,imdbID}) => {
  const [like, setLike] = useState(false);
  const {liked, setLiked} = useGlobalContext();

  

  const likeClick=()=>{
    setLike(!like);
    setLiked((pre)=>([...pre, {movieTitle,poster,year,imdbID}]));
  }
  return (
    <div className='movieDetails'>
         <div className="movieDetails__info">          
            
            <img src={poster} alt={imdbID} />
            <div className="movieDetailsInfo">          
                <p><span className="movieDetailsInfo__title">Title: </span>{movieTitle}</p>
                <p><span className="movieDetailsInfo__year">Year: </span>{year}</p>
                <button onClick={likeClick}>{like ? "Liked" : "Like" }</button>
            </div>
            
          </div>
    </div>
  )
}

export default MovieDetails