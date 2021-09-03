import React from 'react'
import RoastNav from '../components/RoastNav'

const Roasts = () => {
  return (
    <div className='roasts-page'>
      <RoastNav />
      <div className='roasts-container'>
        {/* roast cards live here */}
        <h1>Roasts!!!</h1>
      </div>
    </div>
  )
}

export default Roasts