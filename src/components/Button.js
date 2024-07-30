import React from 'react'

const Button = ({ name }) => {
  return (
    <div>
        <button className='px-5 py-2 ml-5 bg-gray-200 rounded-lg text-sm'>{name}</button>
    </div>
  )
}

export default Button