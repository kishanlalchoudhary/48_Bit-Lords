import React from 'react'
import {useState ,useEffect} from 'react'

function Car() {
    const [Car ,setCar]=useState([])
    const FetchData = async () => {
        const res = await fetch("/carshow", {
          method: 'GET'
        })
        const data = await res.json()
        console.log(data)
        setCar(data)
        console.log(Car)
      }
      useEffect(() => {
        FetchData()
      }, [])
  return (
    <div>
      {
        Car.map((item)=>(
            <div>
            <h1>{item.owner_name}</h1>
            <h2>{item.vehicle_name}</h2>
           </div>
        ))
      }
    </div>
  )
}

export default Car
