import React from 'react'

const RoastCard = (props) => {
  const handleClick = () => {
    console.log(`Clicked ${props.roastID}`)
    //gonna add logic here to move to roast detail page but have some other stuff to addddd
  }
  
  return (
    <div className='roast-card' onClick={handleClick}>
      <h1>{props.roaster}</h1>
      <h1>{props.roastName}</h1>
      <h3>{`Origin: ${props.beanOrigin}`}</h3>
      <h3>{`Bean Type: ${props.beanType}`}</h3>
      {props.roastColor === 1 && <h3>{`Roast Color: Green`}</h3>}
      {props.roastColor === 2 && <h3>{`Roast Color: Blonde`}</h3>}
      {props.roastColor === 3 && <h3>{`Roast Color: Medium`}</h3>}
      {props.roastColor === 4 && <h3>{`Roast Color: Dark`}</h3>}
      {props.roastColor === 5 && <h3>{`Roast Color: Very Dark`}</h3>}
    </div>
  )
}

export default RoastCard
