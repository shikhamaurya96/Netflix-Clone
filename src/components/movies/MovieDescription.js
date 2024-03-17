import React from 'react'
import { useNavigate } from 'react-router-dom'
//import { Outlet } from 'react-router-dom'

const MovieDescription = ({movie}) => {
    const navigate = useNavigate();
    if(movie==null){
        navigate("/browse")
        return
    }
  return (
    <div className='m-6 w-1/2 '>
    <h1 className='font-bold'>{movie.title}</h1>
    <p>{movie.overview}</p>
    <h2 className='font-bold'>Rating : { Math.round(movie.vote_average) } out of 10 </h2>
    </div>
  )
}

export default MovieDescription