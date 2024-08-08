import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_VIDEOS_API } from '../utils/contants';
import PopularVideos from './PopularVideos';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParams ] = useSearchParams();
  const [popularVideos, setPopularVideos] = useState([]);
  let videoId = searchParams.get("v");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closeMenu());
    getVideos();
  },[]);

  const getVideos = async() => {
    const res = await fetch(YOUTUBE_VIDEOS_API);
    const videos = await res.json();
    setPopularVideos(videos?.items);
    console.log("videos",popularVideos, videos);
  }

  return (
      <div className='m-4 px-4 flex flex-row flex-grow-6 w-full'>
        <div className='flex-row mr-4'>
            <iframe 
              width="700" 
              height="400" 
              src={"https://www.youtube.com/embed/"+videoId}
              title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
            <CommentsContainer/>
        </div>
        <div className='flex flex-col flex-grow-3'> 
          <LiveChat/>
          {
            popularVideos.length>0 && 
            popularVideos.map((video)=>(
              <Link key={video.id} to={"/watch?v=" + video.id} onClick={() => window.scroll(0,0)}>
                <PopularVideos info={video}/>
              </Link>
            )
          )}
       </div>
      </div>
  )
}

export default WatchPage;