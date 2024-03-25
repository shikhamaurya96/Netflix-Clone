import React from 'react'
import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js';
import TrailerTitle from "./movies/TrailerTitle";
import Trailer from './movies/Trailer.js';
import MovieList from './movies/MovieList.js';
import Header from './Header.js';

const Browse = () => {
  
  const user = useSelector((store)=>store.user.currentUsers)

  useNowPlayingMovies();
const movieInfo = useSelector((store)=>store.movies.nowPlayingMovies)
  if(user===null)return;
  if(movieInfo===null)return
  const title= movieInfo[2].title;
  const info = movieInfo[2].overview;
  const id = movieInfo[2].id;
  
 

  return (
    <div >
    
    <Trailer id={id}/>
    <Header user={user}/>
     <TrailerTitle title={title} info={info}/>
     <MovieList/>  
     
      </div>
  )
}

export default Browse
