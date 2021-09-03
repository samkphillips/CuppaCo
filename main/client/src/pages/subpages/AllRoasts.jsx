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
        <div>
          {roasts.map((roast) => (
            <RoastCard />
          ))}
        </div>
      </div>
  )
}

export default AllRoasts