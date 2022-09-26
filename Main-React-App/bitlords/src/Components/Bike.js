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
      const del=(item)=>{
        console.log(item._id)
        const id=item._id;
        const res = fetch('/bikedel',{
          method:'POST',
          headers:{
            "Content-type":"application/json"
          },
          body:id
        })
      }
  return (
    <div>
      {
        bike.map((item)=>(
            <div>
            <h1>{item.owner_name}</h1>
            <h2>{item.vehicle_name}</h2>
            <h3>start time:{item.start_time}</h3>
            <h3>end time : {item.end_time}</h3>
            <button onClick={()=>del(item)}> Delete </button>
           </div>
        ))
      }
    </div>
  )
}

export default Bike
