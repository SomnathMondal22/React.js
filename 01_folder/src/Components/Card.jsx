import React from 'react'

const Card = ({number}) => {
  return (
    <div>
      <div className='card'>
        <h1>Somnath Mondal</h1>
        <p>Software engineer</p>
        <h4>This is a Card number: {number}</h4>
      </div>
    </div>
  )
}

export default Card