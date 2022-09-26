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
            <h1>{item.owner_name}</h1>
            <h2>{item.rent}</h2>
            
            <input type="email" name='gmail' value={item_id.gmail} onChange={(e)=>{
               setitem_id({...item_id,id:item.gmail,gmail:e.target.value})
            }}></input>
            
            <button type = "button" value={item._id} name='id' onClick={()=>{book(item)}}>delete</button>
        
            </div>
        ))
      }
    </div>
  )
}

export default Cart
