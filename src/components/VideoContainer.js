import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/contants';
import Video from './Video';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    getVideos();
  }, []);

  const getVideos = async() =>{
     const videos = await fetch(YOUTUBE_VIDEOS_API);
     const res = await videos.json();
     setVideos(res.items);
  }

  return (
    videos.length>0 &&
    <div className='flex flex-wrap'>
      {videos?.map((video)=>(
        <Link to={"/watch?v=" + video.id}><Video key={video.id} info={video}/></Link>
      ))}
    </div>
  );
};

export default VideoContainer;