import React from 'react'
import {useState ,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {add} from '../Components/store/Cartslice'
import Nev from './Nev'

import '../App.css'
function Car() {
  const dispatch=useDispatch()
    const [Car ,setCar]=useState([])
    const[item_id,setitem_id]=useState({
      id:""
    })
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



      const del=(item)=>{

        dispatch(add(item))

        setitem_id({item_id,id:item._id})
          const {id}=item_id
         console.log({...item_id})
         const res= fetch('/cardel',{
           method:'POST',
           headers:{
             "Content-type":"application/json"
           }
           ,
           body:JSON.stringify({
             id
           })
         
         
          })
         
            
      }
         
       
      
  return (
    <div>
      <Nev></Nev> 
      <div class="row row-lg-cols-2  row-cols-1">
      {
        Car.map((item)=>(
          <div class="card mb-3 card-img" >
          <div class="row g-0">
            <div class="col-md-4">
              <img src="bicycle.png.png" class="img-fluid rounded-start about_image" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Car</h5>
                <h3>Vehicle Number : {item.vehicle_no}</h3>
                <h3>Address :{item.address}</h3>
                <h3>Amount :Rs.{item.rent}</h3>
                <h3>Availability start :date {item.start_time}</h3>
                <h3>Availability end :up to {item.end_time}</h3>
                <h2>Owner name : {item.owner_name}</h2>
                <button type="button" className='btn btn-primary' value={item._id} name='id' onClick={() => { del(item) }}>delete</button>
              </div>
            </div>
          </div>
        </div>
        ))
      }
      </div>
    </div>
  )
    
  
    }

export default Car
