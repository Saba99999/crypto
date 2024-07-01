import React from 'react'
import { Link } from 'react-router-dom'
import './menue.css'

const Menue = () => {
  return (
    <div className='menue-conteiner'>
    <ul>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={'/features'}><li>Features</li></Link>
        <Link to={'/pricing'}><li>Pricing</li></Link>
        <Link to={"/blog"}><li>Blog</li></Link>
    </ul>
</div>
  )
}

export default Menue
