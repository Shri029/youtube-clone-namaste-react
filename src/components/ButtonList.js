import React from 'react'
import Button from './Button'

const names = ["All", "News", "Cricket", "Live", "Cooking", "Dance", "Music", "Devotional", "JavaScript", "Data Structures"]
const ButtonList = () => {
  return (
    <div className='flex'>
      {names.map((name, index)=> <Button key={index} name={name}/>)}
    </div>
  )
}

export default ButtonList