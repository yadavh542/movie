import logo from './logo.svg';
import './App.css';
import HomePage from './screens/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MoviePage from './screens/MoviePage';
import ErrorPage from './screens/ErrorPage';
import Navbar from './components/Navbar';
import LikedPage from './screens/LikedPage';

function App() {
  return (
    <div className="">
      {/* <Navbar/> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="movie/:id" element={<MoviePage/>}/>
          <Route path="/liked" element={<LikedPage/>}/>
             {/* <Route path=":movieId" element={<MovieDetails/>} /> */}
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
