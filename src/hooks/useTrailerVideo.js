import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailer } from '../utils/movieSlice';
import { options } from '../utils/constants';

const useTrailerVideo = (id) => {
    const dispatch = useDispatch();
    const base_URL = "https://api.themoviedb.org/3/movie/";
     const query_URL = "/videos?language=en-US"
    const trailerDataFunction = async()=>{
    const data =   await fetch(base_URL+id+query_URL, options);
    const videoData = await data.json();
    console.log(videoData)
    const trailerData = videoData.results.filter((video)=>video.type==="Trailer");
    console.log(trailerData);
    const trailer = (trailerData.length===0)?videoData[0]:trailerData[0]
    console.log(trailer)
    dispatch(addTrailer(trailer))
    }
    useEffect(()=>{
        trailerDataFunction();  
    },[])
    
  return (
    <div>useTrailerVideo</div>
  )
}

export default useTrailerVideo