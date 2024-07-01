import React from 'react'
import comingSoonImage from '../../assets/comingSoon.png'
import './features.css'

function Features() {
  return (
    <div>
      <h1>Coming Soon</h1>
      <img src={comingSoonImage} className='coming-soon-image'></img>
    </div>
  )
}

export default Features
