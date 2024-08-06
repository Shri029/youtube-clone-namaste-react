import React from 'react';
// import { useSearchParams } from 'react-router-dom';

const Video = ({info}) => {
  // const [searchParams ] = useSearchParams();
  const { snippet, statistics} = info;
  const { channelTitle, title, thumbnails} = snippet;

  return (
    <div className='p-2 m-4 w-80 shadow text-sm'>
         <img className="rounded-lg" alt="video" src= {thumbnails.medium.url}/>
         <ul>
          <li className="font-bold truncate">{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} Views</li>
         </ul>
    </div>
  )
}

// using HOC
export const AdVideo = ({ info }) => {
    return (
    <div className='border border-red-700 m-0'>
      {/* <label className="absolute bg-red-500 text-white m-4 p-2 rounded-md">Ad Comp</label> */}
      <Video info={info} />
    </div>
    )
}

export default Video;