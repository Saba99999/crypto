import React, { useContext, useEffect, useState } from 'react'
import "./coin.css"
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/CoinCntext';
import LIneChart from '../../components/chart/LIneChart';



const Coin = () => {

  const {coinId} = useParams();
  const [coinData, setCoinData] = useState([]);
  const [chartData, setChartData] = useState([])
  const {currency} = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-iZpVc1UgvaYB1jFddirq8S2J'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(response => response.json())
      .then(response => setCoinData(response))
      .catch(err => console.error(err));
  }

  const fetchChartData = async () => {
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-iZpVc1UgvaYB1jFddirq8S2J'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(response => response.json())
      .then(response => setChartData(response))
      .catch(err => console.error(err));
  }


  useEffect(() => {
    fetchCoinData();
    fetchChartData();
  }, [currency])


  if (coinData.image && chartData.prices) {
    return (
      <div className='conteiner'>
              <div className='coin'>
        <div className='coin-name'>
          <h1>{coinData.name}</h1>
          <img src={coinData.image.large} alt='coin image' className='coin-image'/>
        </div>
        <div className='line-chart'>
          <LIneChart chartData={chartData}/>
        </div>
        <div className='coin-info'>
          <ul>
            <li>Crypto Market Runk</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Current Price</li>
            <li>{coinData.market_data.current_price[currency.name]} {currency.Symbol}</li>
          </ul>
          <ul>
            <li>Market Cap</li>
            <li>{coinData.market_data.market_cap[currency.name]} {currency.Symbol}</li>
          </ul>
          <ul>
            <li>24h High</li>
            <li>{coinData.market_data.high_24h[currency.name]} {currency.Symbol}</li>
          </ul>
          <ul>
            <li>24h High</li>
            <li>{coinData.market_data.high_24h[currency.name]} {currency.Symbol}</li>
          </ul>
          <ul>
            <li>24h Low</li>
            <li>{coinData.market_data.low_24h[currency.name]} {currency.Symbol}</li>
          </ul>
        </div>
        <div className='about'>
          <h1>About {coinData.name}</h1>
          <p className='description'>{coinData.description.en}</p>
        </div>
    </div>
      </div>
    )
  } else{
    return(
      <div className='spinner'><div className='spin'></div></div>
    )
  }
}

export default Coin;
