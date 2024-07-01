import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Coin from './pages/coin/Coin'
import Footer from './components/footer/Footer'
import SignUp from './pages/signUp/SignUp'
import Menue from './components/burger-menue/Menue'
import BlogPage from './pages/blog/BlogPage'
import Features from './pages/features/Features'
import Pricing from './pages/pricing/Pricing'

const App = () => {
  return (
    <div className='app'>
      <Navbar className='navbar'/>
      <divm className="main-content">
      <Routes>
        <Route path='/burger-menue' element={<Menue/>}></Route>
        <Route path='/signup' element={<SignUp className="signup"/>} ></Route>
        <Route path='/' element={<Home className='home'/>}/>
        <Route path='/coin/:coinId' element={<Coin className='coin'/>}/>
        <Route path='/blog' element={<BlogPage className='blog'></BlogPage>}></Route>
        <Route path='/features' element={<Features/>}></Route>
        <Route path='/pricing' element={<Pricing/>}/>
      </Routes>
      </divm>
      <Footer className="footer"/>
    </div>
  )
}

export default App

