import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'

function AddRoast(props) {
  const parseForm = (e) => {
    return {
      roastName: e.target[0].value,
      roaster: e.target[1].value,
      beanOrigin: e.target[2].value,
      beanType: e.target[3].value,
      roastColor: Number(e.target[4].value) || 3
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const parsedForm = parseForm(e)

    axios({
      method: 'post',
      url: `${BASE_URL}/roasts`,
      data: parsedForm,
      headers: { 'Content-Type': 'application/json' }
    })
      .then(function (response) {
        console.log(response)
        props.history.push(`/roasts`)
      })
      .catch(function (response) {
        alert(`Submission unsuccessful.`)
        console.log(response)
      })
  }

  return (
    <div className='add-roast'>
      <h1>Submit Your Roast</h1>
      <form className='form-container' onSubmit={handleSubmit}>
        <label>Roast Name:</label>
        <input name="roastName" />
        <label>Roaster Name:</label>
        <input name="roaster" />
        <label>Bean Origin:</label>
        <input name="beanOrigin" />
        <label>Bean Type:</label>
        <input name="beanType" />
        <label>Roast Color (1-5):</label>
        <input name="roastColor" type="Number" min="1" max="5" placeholder="3" />
        
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddRoast
