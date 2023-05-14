// context API (Warehouse)
// Provider (Delivery Boy)
// Consumer / useContext (You)
// children (your order)
// To make available delivery boy everywhere you need to wrap Provider in a index.js then it will pass data everywhere in the app.
import React,{useContext, useEffect, useState} from 'react';


const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
//make warehouse / context
const AppContext = React.createContext();

//create Provider / Delivery boy
const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({show:"false", msg:""});
    const [search,setSearch] = useState("slow");
    const [liked, setLiked] = useState([]);

    const getMovies = async (url) =>{
        setIsLoading(true);
        try{
            const res =await fetch(url);
            const data =await res.json();
            console.log(data);
            if(data.Response === "True"){
                setIsLoading(false);
                setIsError({
                    show:"false", msg:"",
                });
                setMovie(data.Search);
                
            } else {
                setIsError({
                    show:"true", msg:data.Error,
                });
            }
        }catch(e){
            console.log(e);
        };

    };

    useEffect(() => {
        const timerOut = setTimeout(() => {
            getMovies(`${API_URL}&s=${search}`);
        },900);
        
        return () => clearTimeout(timerOut);
    },[search]);

    //how to maintain state after a page refresh using useEffect
    useEffect(() => {
        const movieData = window.localStorage.getItem("movie");
        setMovie(JSON.parse(movieData));
      }, []);
    
    useEffect(() => {
        window.localStorage.setItem("movie", JSON.stringify(movie));
      });

    useEffect(() => {
        window.localStorage.setItem("like", JSON.stringify(liked));
      });


    return <AppContext.Provider value={{isLoading,isError,movie,setMovie,search,setSearch,liked,setLiked}}>
    {children}
    </AppContext.Provider>
};

//global custom hooks
const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};