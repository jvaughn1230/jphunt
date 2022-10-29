import React from 'react'
import testImg from '../assets/trex.webp'

const DinoCard = (props) => {
  return (
    <div className='dino-card'>
        <img src={testImg} alt='test-img' className='dino-pic' />
        <div>{props.name}</div>
        <div>{props.movies}</div>
        
        
    </div>

  )
}

export default DinoCard