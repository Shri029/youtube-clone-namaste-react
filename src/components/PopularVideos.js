import React from 'react'

const PopularVideos = ({ info }) => {

    const { snippet, statistics} = info;
    const { channelTitle, title, thumbnails} = snippet;
  return (
    <div className='flex mb-3 rounded-lg shadow-lg' >
         <img className="rounded-lg" alt="video" src= {thumbnails.medium.url} width={200}/>
          <ul className='text-xs px-2'>
            <li><h1 className='font-bold text-sm'>{title}</h1></li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
          </ul>
    </div>
  )
}

export default PopularVideos