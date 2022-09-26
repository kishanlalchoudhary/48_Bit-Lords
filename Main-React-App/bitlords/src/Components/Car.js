import React from 'react'
import {useState ,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {add} from '../Components/store/Cartslice'
import Nev from './Nev'

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
      {
        Car.map((item)=>(
            <div>
            <h1>{item.owner_name}</h1>
            <h2>{item.vehicle_name}</h2>
           
            <button type = "button" value={item._id} name='id' onClick={()=>{del(item)}}>delete</button>
            
           </div>
        ))
      }
    </div>
  )
    
  
    }

export default Car
