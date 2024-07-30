import React from 'react'

const Video = ({info}) => {
   const { snippet, statistics} = info;
  const { channelTitle, title, thumbnails} = snippet;

  return (
    <div className='p-2 m-5 w-80 shadow text-sm'>
         <img className="rounded-lg" alt="video" src= {thumbnails.medium.url}/>
         <ul>
          <li className="font-bold truncate">{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} Views</li>
         </ul>

    </div>
  )
}

export default Video;