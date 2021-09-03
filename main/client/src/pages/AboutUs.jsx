import React from 'react'
import logo from '../assets/coffee-cup.svg'

const AboutUs = () => {
  return (
    <div className='about-page'>
      <h1>About Us</h1>
      <p>Here at Cuppa Co, we believe that coffee is good and also you should drink it and talk about it. We have a passion for talking about coffee and making money off of people talking about coffee, probably.</p>
      <img src={logo} alt='coffee cup logo' height="80" />
      <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> and <a href="https://smashicons.com/" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  )
}

export default AboutUs