import React from 'react'

const BrewCard = (props) => {
  return (
    <div className='brew-card'>
      <h4>{props.date}</h4>
      <h3>{props.authorName} wrote:</h3>
      <h5>Brew Method: {props.brewMethod}</h5>
      <h5>Prepared with: {props.preppedWith}</h5>
      <h4>Aroma: {props.aromaNotes}</h4>
      <h4>Flavor: {props.flavorNotes}</h4>
      <h3>Rating: {props.rating}</h3>
    </div>
  )
}

export default BrewCard
