import React, { useContext, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import { CoinContext } from '../../context/CoinCntext'
import { Link } from 'react-router-dom'
import menueIcon from '../../assets/menue.png'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)

  const curenccyHendler = (event) =>{
    switch (event.target.value) {
      case "usd":
        setCurrency({name: "usd", Symbol: "$"})
        console.log("usd")
        break;
      case "eur":
        setCurrency({name: "eur", Symbol: "€"})
        console.log("eur")
        break;
      case "gel":
        setCurrency({name: "gel", Symbol: "₾"})
        console.log("gel")
        break;
      default:
        setCurrency({name: "usd", Symbol: "$"})
        console.log("rame")
        break;
    }
  }

  return (
    <div className='navbar'>
      <div className='logo-menue-div'>
      <Link to={'/'}>
      <img src={logo} alt='logo' className='logo'></img>
      </Link>
      <Link to={'burger-menue'}>
      <img src={menueIcon} alt='menue-icon' className='menue-icon'/>
      </Link>
      </div>
      <ul>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={'/features'}><li>Features</li></Link>
        <Link to={'/pricing'}><li>Pricing</li></Link>
        <Link to={"/blog"}><li>Blog</li></Link>
      </ul>
      <div className='nav-right'>
        <select onChange={curenccyHendler}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="gel">GEL</option>
        </select>
        <Link to={'/signup'}><button>Sign Up</button></Link>
      </div>
    </div>
  )
}

export default Navbar
