import React, { useState, useEffect } from 'react'
import BrewCard from '../../components/BrewCard'
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

  const deleteMe = async () => {
    const res = await axios.delete(`${BASE_URL}/roasts/${roast._id}`)
    props.history.push(`/roasts`)
  }

  useEffect(() => {
    getRoast()
    getBrews()
  }, [])

  return roast ? (
      <div className='roast-details'>
        <h1>{`${roast.roaster} ${roast.roastName}`}</h1>
        <h3>{`Origin: ${roast.beanOrigin}`}</h3>
        <h3>{`Bean Type: ${roast.beanType}`}</h3>
        {roast.roastColor === 1 && <h3>{`Roast Color: Green`}</h3>}
        {roast.roastColor === 2 && <h3>{`Roast Color: Blonde`}</h3>}
        {roast.roastColor === 3 && <h3>{`Roast Color: Medium`}</h3>}
        {roast.roastColor === 4 && <h3>{`Roast Color: Dark`}</h3>}
        {roast.roastColor === 5 && <h3>{`Roast Color: Very Dark`}</h3>}
        <button onClick={deleteMe}>Delete Roast</button>
        <hr />
        <div>
          {brews.map((brew) => (
            <BrewCard 
              {...props}
              authorName={brew.authorName} 
              date={brew.date} 
              drankAt={brew.drankAt} 
              brewMethod={brew.brewMethod} 
              preppedWith={brew.preppedWith} 
              aromaNotes={brew.aromaNotes} 
              flavorNotes={brew.flavorNotes} 
              rating={brew.rating} 
              id={brew._id}
              roastID={brew.roastID}
            />
          ))}
        </div>
        <button onClick={() => {
          props.history.push(`/roasts/addbrew/${roast._id}`)
        }}>Add your Brew</button>
      </div>
  ) : null
}

export default RoastDetail