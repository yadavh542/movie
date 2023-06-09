import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Movie.css";

const Navbar = () => {
  return (
    <div style={{width:'100%',height:'80px', backgroundColor:'lightseagreen',top:'0',zIndex:'50',display:'flex',}}>
        <div style={{display:'flex',textDecoration:'none',alignItems:'center'}}>
            
                <NavLink to={`/`} style={{fontSize:'24px',textDecoration:'none',fontWeight:'bolder',color:'black',marginLeft:'40px',marginRight:'20px'}}>Movies App</NavLink>

                <NavLink to={`/`} className='NavLinkStyle'>Home</NavLink>
        
                <NavLink to={`/liked`} className='NavLinkStyle'>Liked Movies</NavLink>
            
        </div>
        
    </div>
  )
}

export default Navbar