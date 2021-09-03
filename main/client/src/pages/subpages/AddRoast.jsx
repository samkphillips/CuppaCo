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
        <label for='roastI'>Roast Name:</label>
        <input name="roastName" id='roastI' />
        <label for='roasterI'>Roaster Name:</label>
        <input name="roaster" id='roasterI' />
        <label for='beanOriginI'>Bean Origin:</label>
        <input name="beanOrigin" id='beanOriginI' />
        <label for='beanTypeI'>Bean Type:</label>
        <input name="beanType" id='beanTypeI' />
        <label for='roastColorI'>Roast Color (1-5):</label>
        <input name="roastColor" id="roastColorI" type="Number" min="1" max="5" placeholder="3" />
        
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddRoast
