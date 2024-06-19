import React from 'react'
import './Hero1.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

export const Hero1 = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
          <h2>New Arrivals Only</h2>
          <div>
          <div className='hero-hand-icon'>
            <p>New</p>
            <img src={hand_icon} alt=''/>
          </div>
          <p>Collection</p>
          <p>for Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow} alt="" />
        </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}
