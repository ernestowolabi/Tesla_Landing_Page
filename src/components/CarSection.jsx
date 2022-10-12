import React from 'react'
import ModelS from '../images/ModelS.jfif'
import Model3 from '../images/Model3.jfif'
import ModelX from '../images/ModelX.jfif'
import ModelY from '../images/ModelY.jfif'
import SolarPanels from '../images/SolarPanels.jfif'
import SolarRoof from '../images/SolarRoof.jfif'
import CarButtons from './CarButtons'

const CarSection = () => {
  return (
    <>

      {/* car section */}
      <section id='modelS' className='car-section'>
        <img src={ModelS} alt="Model S Image" className='car-img'/>
        <div className='car-details transform-50'>
          <h1 className='model-name'>Model S</h1>
          <h2 className='tag-line'>Order online for <span className='underline cursor-pointer'>Touchless Delivery</span></h2>
        </div>
        <CarButtons />
        <a href="#model3">
          <svg className='down-svg' viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path stroke="var(--tds-icon--fill, #171a20)" stroke-width="1.5" d="m19.5 12.5-4.5 4-4.5-4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </section>
      

      {/* car section */}
      <section id='model3' className='car-section'>
        <img src={Model3} alt="Model 3 Image" className='car-img'/>
        <div className='car-details transform-50'>
          <h1 className='model-name'>Model 3</h1>
          <h2 className='tag-line'>Order online for <span className='underline cursor-pointer'>Touchless Delivery</span></h2>
        </div>
        <CarButtons />
        <a href="#modelX">
          <svg className='down-svg' viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path stroke="var(--tds-icon--fill, #171a20)" stroke-width="1.5" d="m19.5 12.5-4.5 4-4.5-4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </section>

      {/* car section */}
      <section id='modelX' className='car-section'>
        <img src={ModelX} alt="Model X Image" className='car-img'/>
        <div className='car-details transform-50'>
          <h1 className='model-name'>Model X</h1>
          <h2 className='tag-line'>Order online for <span className='underline cursor-pointer'>Touchless Delivery</span></h2>
        </div>
        <CarButtons />
        <a href="#modelY">
          <svg className='down-svg' viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path stroke="var(--tds-icon--fill, #171a20)" stroke-width="1.5" d="m19.5 12.5-4.5 4-4.5-4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </section>

      {/* car section */}
      <section id='modelY' className='car-section'>
        <img src={ModelY} alt="Model Y Image" className='car-img'/>
        <div className='car-details transform-50'>
          <h1 className='model-name'>Model Y</h1>
          <h2 className='tag-line'>Order online for <span className='underline cursor-pointer'>Touchless Delivery</span></h2>
        </div>
        <CarButtons />
        <a href="#solarPanels">
          <svg className='down-svg' viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path stroke="var(--tds-icon--fill, #171a20)" stroke-width="1.5" d="m19.5 12.5-4.5 4-4.5-4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </section>

      {/* car section */}
      <section id='solarPanels' className='car-section'>
        <img src={SolarPanels} alt="Solar Panels Image" className='car-img'/>
        <div className='car-details transform-50'>
          <h1 className='model-name'>Solar Panels</h1>
          <h2 className='tag-line'>Order online for <span className='underline cursor-pointer'>Touchless Delivery</span></h2>
        </div>
        <CarButtons />
        <a href="#solarRoof">
          <svg className='down-svg' viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path stroke="var(--tds-icon--fill, #171a20)" stroke-width="1.5" d="m19.5 12.5-4.5 4-4.5-4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </section>

      {/* car section */}
      <section id='solarRoof' className='car-section'>
        <img src={SolarRoof} alt="Solar Roof Image" className='car-img'/>
      
        <div className='car-details transform-50'>
          <h1 className='model-name'>Solar Roof</h1>
          <h2 className='tag-line'>Order online for <span className='underline cursor-pointer'>Touchless Delivery</span></h2>
        </div>
        <CarButtons />
      </section>

    </>
  )
}

export default CarSection