import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'

function AddBrew(props) {
  const parseForm = (e) => {
    return {
      authorName: e.target[0].value,
      date: new Date(),
      drankAt: e.target[1].value,
      brewMethod: e.target[2].value,
      preppedWith: e.target[3].value,
      aromaNotes: e.target[4].value,
      flavorNotes: e.target[5].value,
      rating: Number(e.target[6].value) || 10,
      roastID: props.match.params.id
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const parsedForm = parseForm(e)

    axios({
      method: 'post',
      url: `${BASE_URL}/brews`,
      data: parsedForm,
      headers: { 'Content-Type': 'application/json' }
    })
      .then(function (response) {
        console.log(response)
        props.history.push(`/roasts/details/${props.match.params.id}`)
      })
      .catch(function (response) {
        alert(`Submission unsuccessful.`)
        console.log(response)
      })
  }

  return (
    <div className='add-roast'>
      <h1>Submit Your Brew</h1>
      <form className='form-container' onSubmit={handleSubmit}>
        <label>Your Name:</label>
        <input name="authorName" />
        <label>Drank At:</label>
        <input name="drankAt" />
        <label>Brew Method:</label>
        <input name="brewMethod" />
        <label>Prepared With:</label>
        <input name="preppedWith" />
        <label>Aroma Notes:</label>
        <input name="aromaNotes" />
        <label>Flavor Notes:</label>
        <input name="flavorNotes" />
        <label>Rating (1-10):</label>
        <input name="rating" type="Number" min="1" max="10" placeholder="10" />
        
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddBrew
