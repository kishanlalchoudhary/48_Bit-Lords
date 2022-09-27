import React from 'react'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Nev from './Nev'

function Carform() {

    let [User,setUser]=useState({
    start_time: {
        owner_name:"",vehicle_name:"",vehicle_no:"",start_time:"",end_time:"",address:"",rent:"",gmail:""
      }})
    
  let name , value
  const carinput =(e)=>{
    console.log(User)
    name=e.target.name;
    value=e.target.value;
  
  
    setUser({...User,[name]:value})
    
  }
  
  const carfetchdata= async(e)=>{
    e.preventDefault()
    const {owner_name,vehicle_name,vehicle_no,start_time,end_time,address,rent,gmail}=User
   const res=await fetch('/car',{
    method:'POST',
    headers:{
      "Content-type":"application/json"
    }
    ,
    body:JSON.stringify({
        owner_name,vehicle_name,vehicle_no,start_time,end_time,address,rent,gmail
    })
  
   });
   const  data= await res.json();
   console.log(data)
   if(res.status===422||!data){
    window.alert("Please enter the information ")
  
   }
   else if(res.status===500){
    window.alert("unable to store data")
   }
   else{
    window.alert("your form has been submitted")
    
    
   }
  
  }

    



    
  return (
    <div>
      <Nev></Nev> 
        <h1>car form</h1>
       <form  method='POST'>
      <div class="input-group mb-3">
      <span class="input-group-text">Name</span>
      <input type="text"  name="owner_name" value={value} onChange={carinput} class="form-control" placeholder="Name" aria-label="carUsername" aria-describedby="basic-addon1" />
      </div>

      <div class="input-group mb-3">
      <span class="input-group-text">Vehical type</span>
        <input type="text" name='vehicle_name' value={value} onChange={carinput} width={5}  placeholder="Email"  />
       
      </div>

     
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon3">vehicle Number</span>
        <input type="text" name='vehicle_no' value={value}onChange={carinput} class="form-control" id="basic-url" aria-describedby="basic-addon3"placeholder="WhatsApp Number" />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text">start_time</span>
        <input type="text"name='start_time' value={value}onChange={carinput} class="form-control" placeholder='Password' aria-label="Amount (to the nearest dollar)" />
       
      </div>

     
      <div class="input-group mb-3">
        <span class="input-group-text">End time</span>
        <input type="text" name='end_time' value={value}onChange={carinput} class="form-control" placeholder='Confirm the password' aria-label="Amount (to the nearest dollar)" />
       
      </div>
    
      </form>

      <div class="input-group mb-3">
      <span class="input-group-text">Rent</span>
      <input type="text"  name="rent" value={value} onChange={carinput} class="form-control" placeholder="Name" aria-label="carUsername" aria-describedby="basic-addon1" />
      </div>
      <div class="input-group mb-3">
      <span class="input-group-text">Address</span>
      <input type="text"  name="address" value={value} onChange={carinput} class="form-control" placeholder="Name" aria-label="carUsername" aria-describedby="basic-addon1" />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Gmail</span>
        <input type="text" name='gmail' value={value}onChange={carinput} class="form-control" placeholder='Confirm the password' aria-label="Amount (to the nearest dollar)" />
       
      </div>
     
      <button type='Submit' onClick={carfetchdata}> Submit</button>
   
    
    </div> 
  )
}

export default Carform
