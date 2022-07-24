import React from "react";
import {useEffect ,useState} from 'react';
import './App.css';
import searchIcon from './searchIcon.png';
import MovieCard from './MovieCard' ;


const API_URL ='https://www.omdbapi.com/?i=tt3896198&apikey=e2638870'



const App= ()=>{

    const [movies , setMovies]= useState([])       //👈 use state to show movies
    const [searchValue, setSearchValue]= useState('');

    const searchMovie = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data.Search);
        setMovies(data.Search);
    }

    useEffect( ()=>{
        searchMovie('avengers')      
        
    }, [] );




    return(

    <div className="app">
        <h1>MovieMenia</h1>

     <div className="search">
<input placeholder="search movie" value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}></input>     
 <img src={searchIcon} alt='search' onClick={()=>{searchMovie(searchValue)}} id="searchIcon">
 </img>
 </div>  


{
    movies?.length > 0
     ? (
       <div className="container">

       { movies.map((movie) =>(

           <MovieCard movie={ movie } />
       )
    ) }
       </div> 

    ) : (
        <div className="empty"> 
        <h2>NO MOVIES FOUND</h2>
        </div>
    )
}  


</div>  
      
    )
}

export default App ;