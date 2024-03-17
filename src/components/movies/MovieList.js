import React from 'react'
import MovieCard from './MovieCard'
import useMovieGenres from '../../hooks/useMovieGenres'
import { useSelector } from 'react-redux'
const MovieList = () => {
  useMovieGenres();
  const genreList = useSelector((store)=>store.movies.genre)
  if(genreList===null)return;
  console.log(genreList);
  
  return (
    <div className='bg-black'>
        {
      genreList.map((genre)=><MovieCard title={genre.name} id={genre.id}/>)  
        
        }
    </div>
  )
}

export default MovieList