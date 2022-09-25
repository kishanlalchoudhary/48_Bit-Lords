import React from 'react'
import {useState ,useEffect} from 'react'

function Bike() {
    const [bike ,setbike]=useState([])
    const FetchData = async () => {
        const res = await fetch("/bike", {
          method: 'GET'
        })
        const data = await res.json()
        console.log(data)
        setbike(data)
        console.log(bike)
      }
      useEffect(() => {
        FetchData()
      }, [])
  return (
    <div>
      {
        bike.map((item)=>(
            <div>
            <h1>{item.name}</h1>
            <h2>{item.vehicle_name}</h2>
           </div>
        ))
      }
    </div>
  )
}

export default Bike
