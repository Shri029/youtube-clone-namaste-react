import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_VIDEOS_API } from '../utils/contants';
import PopularVideos from './PopularVideos';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
  const [searchParams ] = useSearchParams();
  const [popularVideos, setPopularVideos] = useState([]);
  let videoId = searchParams.get("v");

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
      <div className='px-5 m-5 flex'>
        <div className='flex-row'>
          <div>
            <iframe 
              width="700" 
              height="400" 
              src={"https://www.youtube.com/embed/"+videoId}
              title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
            </iframe>
          </div>
          <div>
            <CommentsContainer/>
          </div>
        </div>
        <div className='flex-row ml-2'> 
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