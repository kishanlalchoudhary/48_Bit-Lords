import React from 'react'
import {useState ,useEffect} from 'react'
import Nev from './Nev'
import {useDispatch} from 'react-redux'
import {add} from '../Components/store/Cartslice'

function Bike() {

  const dispatch=useDispatch()
  const[item_id,setitem_id]=useState({
    id:""
  })


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

        dispatch(add(item))

        setitem_id({item_id,id:item._id})
          const {id}=item_id
         console.log({...item_id})
         const res= fetch('/bicdel',{
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
        bike.map((item)=>(
            <div>
             <div>
            <h1>{item.owner_name}</h1>
            <h2>{item.vehicle_name}</h2>
           
            <button type = "button" value={item._id} name='id' onClick={()=>{del(item)}}>delete</button>
            
           </div>
           </div>
        ))
      }
    </div>
  )
}

export default Bike
