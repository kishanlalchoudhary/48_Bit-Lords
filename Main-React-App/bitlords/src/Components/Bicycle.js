import React from 'react'
import {useState ,useEffect} from 'react'

function Bicycle() {
    const [Bicycle ,setBicycle]=useState([])
    const FetchData = async () => {
        const res = await fetch("/bicycle", {
          method: 'GET'
        })
        const data = await res.json()
        console.log(data)
        setBicycle(data)
        console.log(Bicycle)
      }
      useEffect(() => {
        FetchData()
      }, [])
  return (
    <div>
      {
        Bicycle.map((item)=>(
            <div>
            <h1>{item.owner_name}</h1>
            <h2>{item.vehicle_name}</h2>
           </div>
        ))
      }
    </div>
  )
}

export default Bicycle
