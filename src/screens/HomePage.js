import React from 'react';
import '../App.css';
import MovieSection from '../components/MovieSection'
import Search from '../components/Search'
import { useGlobalContext } from '../context';
import Navbar from '../components/Navbar';

const HomePage = () => {
  const {isLoading} = useGlobalContext();
  return (<>
  <Navbar/>
    <div className="home-page">
        <Search/>
        {
          isLoading ? (
              <h3 className="loading">Loading...</h3>
          ): <MovieSection/>
        }
        
    </div>
    </>)
}

export default HomePage