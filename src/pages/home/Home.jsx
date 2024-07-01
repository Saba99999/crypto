import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import "./home.css"
import { CoinContext } from '../../context/CoinCntext'
import { Link } from 'react-router-dom';
import noCoin from '../../assets/noCoin.png'

const Home = () => {

  const {allCoin, currency} = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [searchCoin, setSearchCoin] = useState("")

  useEffect(() => {setDisplayCoin(allCoin)}, [allCoin] )


  const searchCoinHendler = displayCoin.filter(item => (item.name.toLowerCase().includes(searchCoin))) 

  const noCoinImgFun = () => (
    <img src={noCoin} alt='noCoin-image' className='noCoin-image'/>
  )


  const searchCoinfun = () =>{
    return(
      searchCoinHendler.map((item, index) => (
        <Link to={`/coin/${item.id}`} className='crypto-layout' key={index}>
          <p>{item.market_cap_rank}</p>
          <div className='coin-image-name'>{item.name} - {item.symbol}<img src={item.image} alt='coin img'></img></div>
          <p>{item.current_price} {currency.Symbol}</p>
          <p className={item.price_change_percentage_24h>0?"green":"red"}>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
          <p className='market-cap'>{item.market_cap} {currency.Symbol}</p>
        </Link>
      )) 
    )
  }

  return (
    <div className='home'>
      <div className='home-head'>
        <h1>Crypto Marketplace</h1>
        <p>A crypto marketplace is a platform where users can search for and compare various cryptocurrencies and related information </p>
        <form>
          <input type='text' placeholder='Search Crypto..' onChange={(e) => (setSearchCoin(e.target.value.toLowerCase()))}></input>

        </form>
      </div>
      <div className='crypto-table'>
        <div className='crypto-layout'>
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p className='h-change'>24H Change</p>
          <p className='market-cap'>Market Cap</p>

        </div>
        { 
          searchCoinHendler.length != 0 ? searchCoinfun() : noCoinImgFun()
        }
      </div>
    </div>
  )
}

export default Home;
