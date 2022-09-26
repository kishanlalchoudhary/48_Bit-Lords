import React from 'react'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'




function Signup() {

    const [worn ,setworn]=useState('*')
    const nevigate=useNavigate();
  let [User,setUser]=useState({
    name:"",gmail:"",phone:"",password:"",cpassword:"",address:"",age:"",gender:"",occupation:"",adhar:"",
  })
  
  
  
  let name , value
    const  inputHandel =(e)=>{
      console.log(User)
      name=e.target.name;
     
        value=e.target.value;
      

      
      
    
    
      setUser({...User,[name]:value})
      
    }
    // this is data fetching using post method .............sending the data to register page in backend ....................;
  
  const fetchdata= async(e)=>{
    e.preventDefault()
    const {  name,address,age,gender,occupation,phone,gmail,adhar,password,cpassword,image}=User
   const res=await fetch('/signup',{
    method:'POST',
    headers:{
      "Content-type":"application/json"
    }
    ,
    
    body:JSON.stringify({
      name,gmail,phone,password,cpassword,gender,age,adhar,occupation,address,image
    }),
    image:image
  
   });
   const  data= await res.json();
   console.log(data)
   if(res.status===422||!data){
    window.alert("Please enter the information ")
  
   }
   else if(res.status===423){
    window.alert("User already exist")
   }
   else if(res.status===425){
    setworn("please check the password and conferm password")
    
   }
   else{
    window.alert("your form has been submitted")
    nevigate('/login')
    
   }
  
  }






  return (
    <div>
       <>
     <form  method='POST'>
      <div class="input-group mb-3">
      <span class="input-group-text">Name</span>
      <input type="text"  name="name" value={value} onChange={inputHandel} class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
      </div>

      <div class="input-group mb-3">
      <span class="input-group-text">Email Address</span>
        <input type="email" name='gmail' value={value} onChange={inputHandel} width={5}  placeholder="Email"  />
       
    </div>

     
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon3">Contact</span>
        <input type="text" name='phone' value={value}onChange={inputHandel} class="form-control" id="basic-url" aria-describedby="basic-addon3"placeholder="WhatsApp Number" />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text">Password</span>
        <input type="Password"name='password' value={value}onChange={inputHandel} class="form-control" placeholder='Password' aria-label="Amount (to the nearest dollar)" />
       
      </div>

     
      <div class="input-group mb-3">
        <span class="input-group-text">Confirm Password</span>
        <input type="Password" name='cpassword' value={value}onChange={inputHandel} class="form-control" placeholder='Confirm the password' aria-label="Amount (to the nearest dollar)" />
        <lable>{worn}</lable>
      </div>
    
      </form>

      <div class="input-group mb-3">
      <span class="input-group-text">Age</span>
      <input type="text"  name="age" value={value} onChange={inputHandel} class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
      </div>

      <div class="input-group mb-3">
      <span class="input-group-text">Address</span>
      <input type="text"  name="address" value={value} onChange={inputHandel} class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
      </div>

      <div class="input-group mb-3">
      <span class="input-group-text">Adhar</span>
      <input type="text"  name="adhar" value={value} onChange={inputHandel} class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
      </div>

      <div class="input-group mb-3">
      <span class="input-group-text">Occupation</span>
      <input type="text"  name="occupation" value={value} onChange={inputHandel} class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div class="input-group mb-3">
      <span class="input-group-text">Gender</span>
      <input type="text"  name="gender" value={value} onChange={inputHandel} class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <button type='Submit' onClick={fetchdata}> Submit</button>
    </>
    </div>
  )
}

export default Signup
