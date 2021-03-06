import React, { useState, useEffect } from 'react'
import RoastCard from '../../components/RoastCard'
import axios from 'axios'
import { BASE_URL } from '../../globals'

const AllRoasts = (props) => {
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
        <div className='roast-container'>
          {roasts.map((roast) => (
            <RoastCard 
              {...props}
              key={`${roast.roaster}-${roast.roastName}`}
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