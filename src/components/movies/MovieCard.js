import React from 'react'
import { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { movieCategoryList } from '../../utils/constants';
import { options } from '../../utils/constants';
import { setSelectedMovie } from '../../utils/movieSlice';
const MovieCard = ({title,id}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [movies,setMovies] = useState(null);
  async function categoryMovies(){
    const data = await fetch(movieCategoryList+id,options)
    const json =await data.json();
    setMovies(json);
  }
  useEffect(()=>{
    categoryMovies();
  },[])
  console.log(movies)
  if(movies == null)return;
  
  const imageBase_URL = "https://image.tmdb.org/t/p/w500/";

  function showMovieData(movie){
    dispatch(setSelectedMovie(movie))
  }
  return (
    <div>
    <div><p className='text-xl ml-6 mb-2 font-bold text-white pt-8'>{title}</p></div>

    <div className='m-2 flex overflow-x-scroll no-scrollbar'>
      {
      movies.results.map((movie)=><div className='mr-2 cursor-pointer' key={movie.id} onClick={()=>showMovieData(movie)}><img className="max-w-64" src={imageBase_URL+movie.poster_path} alt='movie-poster'  width={200} height={200}/></div>)
    }
    </div>
    </div>
  )
} 

export default MovieCard 