import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/contants';
import Video, {AdVideo} from './Video';
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
    <div className='flex flex-wrap'>
      {videos[0] &&<AdVideo info={videos[0]}/>}
        {videos.length>0 && videos?.map((video)=>(
          <Link key={video.id} to={"/watch?v=" + video.id}><Video info={video}/></Link>
        ))}
    </div>
  );
};

export default VideoContainer;