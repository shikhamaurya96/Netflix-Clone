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
    
    const trailerData = videoData.results.filter((video)=>video.type==="Trailer");
    
    const trailer = (trailerData.length===0)?videoData[0]:trailerData[0]
    
    dispatch(addTrailer(trailer))
    }
    
    useEffect(()=>{
        trailerDataFunction();  
    },[])
}

export default useTrailerVideo