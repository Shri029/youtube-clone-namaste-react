import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  //Early return
  if(!isMenuOpen) return null;
  return (
    <div className='p-5 w-70 shadow-lg text-sm'>
      <ul>
        <li>{" "}<Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5 pr-5'>Subscription</h1>
      <ul>
        <li>Movie</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Movie</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
    </div>
  )
}

export default Sidebar