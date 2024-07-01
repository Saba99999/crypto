import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

function LIneChart({chartData}) {

  const [data, setData] = useState([["Data", "Price"]])


  useEffect(() => {
    let dataCopy = [["Data", "Price"]]
    if(chartData.prices){
      chartData.prices.map((item) => {
        dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]])
      })
      setData(dataCopy)
    }else{
      console.log("saba")
    }
  }, [chartData])





  return (
    <div>
      <Chart chartType='LineChart' data={data} height='100%' legendToggle/>
    </div>
  )
}

export default LIneChart
