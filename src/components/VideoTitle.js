import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6  text-lg w-1/3'>{overview}</p>
        <div className=''>
            <button className='bg-gray-500 text-xl text-white p-2 px-12 opacity-50 rounded-sm'>Play</button>
            <button className='bg-gray-500 text-xl text-white p-2 px-4 mx-4 rounded-sm'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle