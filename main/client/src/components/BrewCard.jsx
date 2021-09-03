import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const BrewCard = (props) => {
  const deleteMe = async () => {
    const res = await axios.delete(`${BASE_URL}/brews/${props.id}`)
    props.history.push(`/roasts/details/${props.roastID}`)
  }

  const date = new Date(props.date)
  return (
    <div className='brew-card'>
      <h4>{date.toDateString()}</h4>
      <h3>{props.authorName} wrote:</h3>
      <h5>Brew Method: {props.brewMethod}</h5>
      <h5>Prepared with: {props.preppedWith}</h5>
      <h4>Aroma: {props.aromaNotes}</h4>
      <h4>Flavor: {props.flavorNotes}</h4>
      <h3>Rating: {props.rating}</h3>
      <button onClick={deleteMe}>Delete Brew</button>
    </div>
  )
}

export default BrewCard
