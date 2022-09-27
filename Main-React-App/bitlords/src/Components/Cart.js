import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { remove } from '../Components/store/Cartslice'
import { useEffect, useState } from 'react'
import "../App.css";
import Nev from './Nev'



function Cart() {
  const[item_id,setitem_id]=useState({
    id:"",gmail:""
  })
    const dispatch = useDispatch()
    const data = useSelector((state) => state.cart)
    const book=(item)=>{

      

        const {id,gmail}=item_id
       console.log({...item_id})
       const res= fetch('/message',{
         method:'POST',
         headers:{
           "Content-type":"application/json"
         }
         ,
         body:JSON.stringify({
           id,gmail
         })

        
       
       
        })
       
          
    }

  return (
    <div>
        <Nev></Nev> 
        <h1>cart</h1>
      {
        data.map((item)=>(
            <div>
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
                <h3>to confirm  your booking of vehicle  please enter your email address</h3>
            <input type="email" name='gmail' value={item_id.gmail} onChange={(e)=>{
               setitem_id({...item_id,id:item.gmail,gmail:e.target.value})
            }}></input>
            
            <button type = "button" value={item._id} name='id' onClick={()=>{book(item)}}>delete</button>
        
            </div>
              </div>
            </div>
          </div>
        </div>
          
        ))
      }
    </div>
  )
}

export default Cart
