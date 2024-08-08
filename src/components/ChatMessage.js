import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex p-1 items-center shadow-sm rounded-sm'>
        <img 
            className="h-6" 
            alt="user-icon" 
            src="https://cdn-icons-png.flaticon.com/128/17468/17468126.png"
        />
        <div className='text-xs'>
            <span className='font-bold px-2'>{name}</span>
            <span>{message}</span>
        </div>
    </div>
  )
}

export default ChatMessage