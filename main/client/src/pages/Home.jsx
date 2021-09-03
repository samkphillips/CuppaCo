import React from 'react'
import logo from '../assets/coffee-cup.svg'
import beans from '../assets/beans.svg'

const Home = () => {
  return (
    <div className='home-page'>
      <div style={{textAlign:"center"}}>
        <h1>Welcome to Cuppa Co</h1>
        <img src={logo} alt='coffee cup logo' height="80" style={{margin:"10px"}} />
      </div>
      <p>This is your one stop shop for discovering new roasts, comparing brewing notes with others, and honing your brewing and tasting of delicious coffees!</p>
      <img src={beans} alt='coffee cup logo' height="200" />
    </div>
  )
}

export default Home