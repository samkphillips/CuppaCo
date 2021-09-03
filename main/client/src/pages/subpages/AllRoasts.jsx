import React, { useState, useEffect } from 'react'
import RoastCard from '../../components/RoastCard'
import axios from 'axios'
import { BASE_URL } from '../../globals'

const AllRoasts = () => {
  const [roasts, setRoasts] = useState([])

  const getRoasts = async () => {
    const res = await axios.get(`${BASE_URL}/roasts`)
    setRoasts(res.data.roasts)
  }

  useEffect(() => {
    getRoasts()
  }, [])

  return (
      <div>
        <h2>Roasts</h2>
        <div className='roast-container'>
          {roasts.map((roast) => (
            <RoastCard 
              roastName={roast.roastName} 
              roaster={roast.roaster} 
              beanOrigin={roast.beanOrigin} 
              beanType={roast.beanType} 
              roastColor={roast.roastColor} 
              roastID={roast._id}
            />
          ))}
        </div>
      </div>
  )
}

export default AllRoasts