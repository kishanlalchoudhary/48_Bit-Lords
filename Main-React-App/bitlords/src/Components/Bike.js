import React from 'react'
import {useState ,useEffect} from 'react'
import Nev from './Nev'
import {useDispatch} from 'react-redux'
import {add} from '../Components/store/Cartslice'

import '../App.css'
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
      <div class="row row-lg-cols-2  row-cols-1">
      {
        bike.map((item)=>(
          <div class="card mb-3 card-img mx-3" >
          <div class="row g-0">
            <div class="col-md-4">
              <img src="bicycle.png.png" class="img-fluid rounded-start about_image" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Bike</h5>
                <h5 class="card-title">Address :{item.address}</h5>
                    <h5 class="card-title">Amount :Rs.{item.rent}</h5>
                    <h5 class="card-title">Availability start :date {item.start_time}</h5>
                    <h5 class="card-title">Availability end :up to {item.end_time}</h5>
                    <h5 class="card-title">Owner name : {item.owner_name}</h5>
                <button type="button" className='btn btn-primary' value={item._id} name='id' onClick={() => { del(item) }}>Book</button>
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

export default Bike
