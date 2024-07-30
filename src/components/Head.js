import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

export const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () =>{
        dispatch(toggleMenu());
    }
  return (
    <div className='grid grid-flow-col p-4 my-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img 
                onClick={()=>toggleMenuHandler()}
                className="h-7 mx-2" 
                alt="menu" 
                src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=512"/>
            <a href="/">
            <img 
                className="h-7" 
                alt="youtube-logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"/>
            </a>
        </div>
        <div className="col-span-10 text-center">
            <input className="w-1/2 border border-solid border-b-2 rounded-l-full px-3.5 pb-2 pt-2.5 text-sm" type="text"/>
            <button className="border border-solid border-b-2 rounded-r-full px-5 pb-1.5">
            <div className='inline-flex items-center mt-2.5'>
                <img 
                className="h-4" 
                alt="search" 
                src="https://cdn.iconscout.com/icon/free/png-512/free-search-icon-download-in-svg-png-gif-file-formats--feather-pack-user-interface-icons-433889.png?f=webp&w=512"/>
            </div>
            </button>
        </div>
        <div className='col-span-1'>
            <img 
                className="h-7" 
                alt="user-icon" 
                src="https://cdn-icons-png.flaticon.com/128/17468/17468126.png"/>
        </div>
    </div>
  )
}
