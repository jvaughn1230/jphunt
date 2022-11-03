import React from 'react'
import testImg from '../assets/trex.webp'

const DinoCard = (props) => {
  return (
    <div className='dino-card'>
        <img src={testImg} alt='test-img' className='dino-pic' />
        <h3 className='center-text'>{props.name}</h3>
        <div className='center-text'>{props.movies}</div>
        
        
    </div>

  )
}

export default DinoCard