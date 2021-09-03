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
        alert(`Thank you for your submission`)
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
        <label for='authorI'>Your Name:</label>
        <input name="authorName" id='authorI' />
        <label for='localeI'>Drank At:</label>
        <input name="drankAt" id='localeI' />
        <label for='methodI'>Brew Method:</label>
        <input name="brewMethod" id='methodI' />
        <label for='prepI'>Prepared With:</label>
        <input name="preppedWith" id='prepI' />
        <label for='aromaI'>Aroma Notes:</label>
        <input name="aromaNotes" id='aromaI' />
        <label for='flavorI'>Flavor Notes:</label>
        <input name="flavorNotes" id='flavorI' />
        <label for='rateI'>Rating (1-10):</label>
        <input name="rating" id="rateI" type="Number" min="1" max="10" placeholder="10" />
        
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddBrew
