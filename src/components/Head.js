import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/contants';
import { cacheSuggestions } from '../utils/searchSlice';

export const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false); 
    const searchCache = useSelector((store) => store.search);

    const dispatch = useDispatch();

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu());
    }

    useEffect(() => {
        console.log(searchQuery);

        // Make an API call even after key press
        // Decline the API call 
        // If time diff betwn API call < 200ms

        // Debouncing implementation
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
              setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestion();
            }
          }, 200);
          
        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery]);


    const getSearchSuggestion = async () =>{
        console.log("API call",searchQuery);
        const data =  await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const res = await data.json();
        setSuggestions(res[1]);
          console.log(res);
          dispatch(cacheSuggestions({
            [searchQuery] : res[1],
          }));
    };
  return (
    <div className='grid grid-flow-col p-4 my-2 shadow-md'>
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
        <div className="col-span-10 mx-30">
            <div>
                <input 
                    className="w-1/2 border border-solid border-b-2 rounded-l-full px-3.5 pb-2 pt-2.5 text-sm" 
                    type="text"
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                    onFocus={()=>setShowSuggestions(true)}
                    onBlur={()=>setShowSuggestions(false)}
                />
                <button className="border border-solid border-b-2 rounded-r-full px-5 pb-1.5">
                    <div className='inline-flex items-center mt-2.5'>
                        <img 
                        className="h-4" 
                        alt="search" 
                        src="https://cdn.iconscout.com/icon/free/png-512/free-search-icon-download-in-svg-png-gif-file-formats--feather-pack-user-interface-icons-433889.png?f=webp&w=512"/>
                    </div>
                </button>
            </div>
            {showSuggestions && (
             <div className='fixed mx-1 py-2 px-2 bg-white w-[28rem] text-sm shadow-lg rounded-lg '>
                <ul>
                    {
                     suggestions.map((suggestion)=>
                        <li key={suggestion} className='py-2 px-1 hover:bg-gray-100 flex'>
                            <div className="pt-1 pr-2" >
                                <img 
                                    className="h-4" 
                                    alt="search" 
                                    src="https://cdn.iconscout.com/icon/free/png-512/free-search-icon-download-in-svg-png-gif-file-formats--feather-pack-user-interface-icons-433889.png?f=webp&w=512"
                                />
                            </div>
                            {suggestion}</li>
                    )}
                </ul>
             </div>)}
        </div>
        <div className='col-span-1'>
            <img 
                className="h-7" 
                alt="user-icon" 
                src="https://cdn-icons-png.flaticon.com/128/17468/17468126.png"
            />
        </div>
    </div>
  )
}
