const Comment = ( { info }) => {
    const { name, text} = info;
    return (
            <div className='flex p-2 my-2 bg-gray-200 rounded-sm shadow-sm'>
                <div>
                    <img className="w-14" 
                        alt="user-icon" 
                        src="https://cdn-icons-png.flaticon.com/128/17468/17468126.png"
                    />
                </div>
                <div className='px-2 text-sm text-wrap'>
                    <h1 className='font-bold'>{name}</h1>
                    <h1>{text}</h1>
                </div>
            </div>
    )
}

export default Comment;