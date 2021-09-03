import React from 'react'
import logo from '../assets/coffee-cup.svg'

const Shop = () => {
  return (
    <div className='shop-page'>
      <h1>Pardon The Dust!</h1>
      <p>Our shop section is still under construction. Come back soon for customized coffee recommendations made just for you.</p>
      <img src={logo} alt='coffee cup logo' height="80" />
    </div>
  )
}

export default Shop