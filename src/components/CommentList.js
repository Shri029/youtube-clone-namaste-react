import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) =>{
    return comments?.map((comment, index) => 
            <div>
                <Comment info={comment}/>
                <div key={index} className='ml-5 border-l border-l-gray-500'>
                    <CommentList comments={comment?.replies}/>
                </div>
            </div>
        );
}

export default CommentList;