import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomNames, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessage = useSelector((store) => store.chat.messages);
    const [liveMessage, setLiveMessage] = useState("");

    const handleLiveChat = (e) =>{
        e.preventDefault();
        dispatch(addMessage({
            name: generateRandomNames(),
            message: liveMessage,
        }))
        setLiveMessage('');
    }

    useEffect(()=>{
        const i = setInterval(()=>{
            // Api Polling
            dispatch(addMessage({
                name: generateRandomNames(),
                message: makeRandomMessage(20)+" 🚀",
            }));
        },1500);

        return () => clearInterval();
    },[]);
  return (
    <div className='mb-7 p-2 border border-gray-100 bg-slate-50 rounded-lg'>
        <div className='h-[350px] overflow-y-scroll overflow-hidden flex flex-col-reverse'>
            {chatMessage.map((c, index)=><ChatMessage key={index} name={c.name} message={c.message}/>)}
        </div>
        <form className='h-[35px] p-1 flex w-full' onSubmit={(e)=>{handleLiveChat(e)}}>
            <input 
                className='mr-1 w-full rounded-lg p-1.5 text-xs border border-black' 
                type='text'
                value={liveMessage}
                onChange={(e)=>setLiveMessage(e.target.value)}
            />
            <img 
                className="h-6 w-6" 
                alt="send" 
                src="https://static.thenounproject.com/png/1054386-200.png"
                width="100"
            />
        </form>
    </div>
  )
}

export default LiveChat;