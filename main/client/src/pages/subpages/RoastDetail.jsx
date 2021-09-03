import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'

const RoastDetail = (props) => {
  const [roast, setRoast] = useState()
  const [brews, setBrews] = useState([])

  const getRoast = async () => {
    const res = await axios.get(`${BASE_URL}/roasts/${props.match.params.id}`)
    setRoast(res.data.o[0])
  }

  const getBrews = async () => {
    const res = await axios.get(`${BASE_URL}/brews/${props.match.params.id}`)
    setBrews(res.data.outputBrews)
  }

  useEffect(() => {
    getRoast()
    getBrews()
  }, [])

  return roast ? (
      <div>
        <h1>{roast.roastName}</h1>
        <div>
          {brews.map((brew) => (
            <p>Brew!!</p>
          ))}
        </div>
      </div>
  ) : null
}

export default RoastDetail