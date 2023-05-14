import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import './Search.css';

const Search = () => {
  const {search,setSearch,isError} = useGlobalContext();
  return (
    <div className="search">
        <h2>Search Your Favourite Movie</h2>
        <input 
        value={search}
        onChange={(e)=>setSearch(e.target.value)} 
        type="text" placeholder='Search'/>

        <div className="error__msg">
          <p>{isError.show && isError.msg}</p>
        </div>
    </div>
  )
}

export default Search