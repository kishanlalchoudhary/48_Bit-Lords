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
        alert("car has been booked")
      

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
        
        <h1>The car you have selecte is</h1>
        <h3>To confirm  your booking of vehicle  please enter your email address</h3>
        <div class="row row-lg-cols-2  row-cols-1">
      {
        data.map((item)=>(
           <div>
               <div class="card mb-3 card-img mx-3" >
          <div class="row g-0">
            <div class="col-md-4">
              <img src="bicycle.png.png" class="img-fluid rounded-start about_image" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Car</h5>
                <h5 class="card-title">Address :{item.address}</h5>
                    <h5 class="card-title">Amount :Rs.{item.rent}</h5>
                    <h5 class="card-title">Availability start :date {item.start_time}</h5>
                    <h5 class="card-title">Availability end :up to {item.end_time}</h5>
                    <h5 class="card-title">Owner name : {item.owner_name}</h5>
                
            <input type="email" name='gmail' placeholder="name@example.com" class="form-control" value={item_id.gmail} onChange={(e)=>{
               setitem_id({...item_id,id:item.gmail,gmail:e.target.value})
            }}></input>
            
            <button type = "button" class='btn btn-primary' value={item._id} name='id' onClick={()=>{book(item)}}>Confirm</button>
        
            </div>
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

export default Cart
