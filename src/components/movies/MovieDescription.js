import React from 'react'
import { useNavigate } from 'react-router-dom'
import { imagePoster_URL } from '../../utils/constants';
const MovieDescription = ({movie}) => {
    const navigate = useNavigate();
    if(movie==null){
        navigate("/browse")
        return
    }
  return (
    <div className='m-6 w-1/2 '>
    <h1 className='font-bold text-3xl'>{movie.title}</h1>

    <img src={imagePoster_URL+movie.poster_path} alt='movie-poster' className='h-80 w-1/3 m-4 p-4'/>
    <p>{movie.overview}</p>
    <h2 className='font-bold'>Rating : { Math.round(movie.vote_average) } out of 10 </h2>
    </div>
  )
}

export default MovieDescription