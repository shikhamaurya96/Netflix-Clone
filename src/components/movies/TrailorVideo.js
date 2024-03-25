import React from 'react'
import { useSelector } from 'react-redux';
const TrailorVideo = () => {
    const trailerVideo = useSelector((store)=>store.movies.trailer)
    
     if(trailerVideo===null)return;
  return (
    <div className='w-screen h-screen'>
        <iframe width="100%" height="100%"
    src={"https://www.youtube.com/embed/"+trailerVideo.key+"?autoplay=1&mute=1"} 
    title="YouTube video player" 
    
    allow="accelerometer; fullScreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
        </iframe>
        </div>
  )
}

export default TrailorVideo