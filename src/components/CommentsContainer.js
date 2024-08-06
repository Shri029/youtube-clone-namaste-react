import React from 'react';
import CommentList from './CommentList';

const commentsData = [
    {
      name: "Akshay",
      text: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
      replies: [
        {
          name: "Quo vero reiciendis velit similique earum",
          email: "Jayne_Kuhic@sydney.com",
          text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
          replies: [
            {
              name: "Quo vero reiciendis velit similique earum",
              email: "Jayne_Kuhic@sydney.com",
              text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
              replies: [
                {
                  name: "Quo vero reiciendis velit similique earum",
                  email: "Jayne_Kuhic@sydney.com",
                  text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Shivani",
      email: "Jayne_Kuhic@sydney.com",
      text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    },
    {
      name: "Divya",
      email: "Jayne_Kuhic@sydney.com",
      text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    },
    {
      name: "Quo vero reiciendis velit similique earum",
      email: "Jayne_Kuhic@sydney.com",
     text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
      replies: [
        {
          name: "Quo vero reiciendis velit similique earum",
          email: "Jayne_Kuhic@sydney.com",
         text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
          replies: [
            {
              name: "Quo vero reiciendis velit similique earum",
              email: "Jayne_Kuhic@sydney.com",
             text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
            },
          ],
        },
      ],
    },
  ];

const CommentsContainer = () => {
  return (
    <div className='p-1'>
        <h1 className='font-bold text-lg'>Comments: </h1>
        <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;