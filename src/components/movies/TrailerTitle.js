import React from 'react'

const TrailerTitle = ({title,info}) => {


  return (
    <div className='absolute top-56 w-1/3 ml-10' >
        <h1 className='font-bold text-6xl text-yellow-400 mb-4 '>{title}</h1>
        <p className='text-white'>{info}</p>
        <div>
          <button className=' bg-white p-2 w-28 h-12 mt-4 text-black rounded-md font-bold text-xl shadow-lg hover:bg-opacity-70'>▶️Play</button>
          <button className=' bg-slate-600 p-2 w-max h-12 text-xl mt-4 text-white ml-4 rounded-md font-bold shadow-lg'>ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default TrailerTitle