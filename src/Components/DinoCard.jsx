import React from 'react'

const DinoCard = (props) => {
  return (
    <div>
        {props.name}
        <br />
        {props.movies}
    </div>

  )
}

export default DinoCard