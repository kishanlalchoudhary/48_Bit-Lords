import React from 'react'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Nev from './Nev'

import '../App.css'
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
        {/* <h1>car form</h1>
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
     
      <button type='Submit' onClick={carfetchdata}> Submit</button> */}
   
    




{/* 
      <!-- Signup page starts  --> */}
<div class="container-fluid main-login main-signup">
    <div class="wrapper login signup d-flex justify-content-center align-items-center">
        <div class="container-md">
            <div class="text-center">
                <form action="" class="rounded bg-white shadow p-sm-3 p-3">
                    <h3 class="text-dark fw-bolder fs-2 mb-4">Vehicle Registration Form</h3>
                    <div class="row row-cols-lg-2 row-cols-1">

                        <div class="form-floating mb-3 w-100">
                            <input type="text"  name="owner_name" value={value} onChange={carinput} class="form-control" id="floatingFirstName"
                                placeholder="name@example.com"/>
                            <label for="floatingFirstName" class="tw px-4">Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" name='vehicle_name' value={value} onChange={carinput} class="form-control" id="floatingAge" placeholder="name@example.com"/>
                            <label for="floatingAge" class="tw px-4">Car / Bike / Bicycle</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" name='vehicle_no' value={value}onChange={carinput} class="form-control" id="floatingPhoneNumber"
                                placeholder="name@example.com"/>
                            <label for="floatingPhoneNumber" class="tw px-4">Vehicle Number</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="number"  name="rent" value={value} onChange={carinput} class="form-control" id="floatingPhoneNumber"
                                placeholder="name@example.com"/>
                            <label for="floatingPhoneNumber" class="tw px-4">Amount</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="email" name='gmail' value={value}onChange={carinput} class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput" class="tw px-4">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text"name='start_time' value={value}onChange={carinput} class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput" class="tw px-4">Start Duration</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" name='end_time' value={value}onChange={carinput} class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput" class="tw px-4">End Duration</label>
                        </div>

                    </div>
                    <div class="col-12">
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Pickup Address</label>
                            <textarea type="text"  name="address" value={value} onChange={carinput}  class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="form-check d-flex align-items-center">
                            <input class="form-check-input" type="checkbox" id="gridCheck" checked/>
                            <label class="form-check-label ms-2 " for="gridCheck">
                                I Agree <a href="#">Terms and conditions</a>.
                            </label>
                        </div>
                    </div>
                    <button type="submit"  onClick={carfetchdata} class="btn btn-primary submit_btn w-50 my-4">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>
{/* <!-- Signup page ends  -->

<!-- Footer section starts --> */}

<section class="footer">
    Copyright &copy TempTravel
</section>

{/* <!-- Footer section ends --> */}

    </div> 
  )
}

export default Carform
