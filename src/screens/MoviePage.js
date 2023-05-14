import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import MovieDetails from '../components/MovieDetails';
import { useGlobalContext } from '../context';
import Navbar from '../components/Navbar';

const MoviePage = () => {
  const {id} = useParams();
  const {movie,setMovie,isLoading} = useGlobalContext();

  useEffect(() => {
    const movieData = window.localStorage.getItem("movie");
    setMovie(JSON.parse(movieData));
  }, []);

useEffect(() => {
    window.localStorage.setItem("movie", JSON.stringify(movie));
  });


  let Title;
  let Poster;
  let Year;

  
    for (var i = 0; i < movie.length; i++) {
      // If the key for this iteration's element is desired
      if (movie[i].imdbID === id) {
          // Set the value to appropriately and exit the loop
           Title = movie[i].Title;
           Poster = movie[i].Poster;
           Year = movie[i].Year;
          break;
      }
   }
 
  


  return (<>
    <Navbar/>
    <div className="moviePage">
      {
            isLoading ? (
              <h3>Loading...</h3>
            ): 
          
            <MovieDetails 
            key={id}
            movieTitle={Title}
            poster={Poster}
            year={Year}
            />
          
      }
      
    </div>
    </>)
}

export default MoviePage