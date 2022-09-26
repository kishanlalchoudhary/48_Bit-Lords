import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { remove } from '../Components/store/Cartslice'
import { useEffect, useState } from 'react'
import "../App.css";
import Nev from './Nev'



function Cart() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.cart)
  return (
    <div>
        <Nev></Nev> 
        <h1>cart</h1>
      {
        data.map((item)=>(
            <div>
            <h1>{item.owner_name}</h1>
            <h2>{item.rent}</h2>
            </div>
        ))
      }
    </div>
  )
}

export default Cart
