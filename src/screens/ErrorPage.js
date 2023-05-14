import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="errorPage">
        <div className="error__details">
        <h2>Page Not Found</h2>
        <hr/>
        <Link to="/"> 
        <h3>Go To Home Page</h3>
        </Link>
        </div>
    </div>
  )
}

export default ErrorPage