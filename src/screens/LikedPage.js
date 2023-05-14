import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useGlobalContext } from '../context';
import MovieCard from '../components/MovieCard';

const LikedPage = () => {
    const {liked, setLiked} = useGlobalContext();

    useEffect(() => {
        const likeData = window.localStorage.getItem("like");
        setLiked(JSON.parse(likeData));
      }, []);
    
    

  return (<>
        <Navbar/>
        <h2 style={{display:'flex',justifyContent:'center'}}>Your Liked Movies {liked.length>0 && 'are Empty'}</h2>
            <div style={{display:'flex',justifyContent:'center', flexWrap:'wrap'}}> 
            
            {
                liked?.map((curMovie)=>(
                    <MovieCard 
                        movieTitle={curMovie.movieTitle}
                        poster={curMovie.Poster}
                        year={curMovie.Year}
                    />
                ))
            }
            </div>
        {/* <div>dff</div> */}
    </>)
}

export default LikedPage