import React from 'react'
import TeslaLogo from '../images/tesla.svg'

const NavBar = () => {
  return (
    <header>
      <nav className='navbar'>
        
        <img src={TeslaLogo} alt="tesla logo" className='logo h-6'/>

        <div className='nav-link--wrapper flex-row hidden lg:block'>
              <a href="#modelS" className='nav-link'>Model S</a>
              <a href="#model3" className='nav-link'>Model 3</a>
              <a href="#modelX" className='nav-link'>Model X</a>
              <a href="#modelY" className='nav-link'>Model Y</a>
              <a href="#solarRoof" className='nav-link'>Solar Roof</a>
              <a href="#solarPanels" className='nav-link'>Solar Panels</a>
        </div>
        
        <div className="ext-link--wrapper flex flex-row">
              <a href="#shop" className='nav-link hidden lg:block'>Shop</a>
              <a href="#account" className='nav-link hidden lg:block'>Account</a>
              <a href="#menu" className='nav-link'>Menu</a>
        </div>


      </nav>
    </header>

  )
}

export default NavBar