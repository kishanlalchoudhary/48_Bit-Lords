import React from 'react'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
function Login() {
   const [login ,setlogin]=useState("Login")
    let [user,setuser]=useState({
        email:"",
        password:""
      })
    
    const nevigate=useNavigate();
  
  let name,value
  const  inputHandel =(e)=>{
   
    name=e.target.name;
    value=e.target.value;
  
  
    setuser({...user,[name]:value})
    
  }
  const fetchdata= async(e)=>{
    e.preventDefault()
    const { email,password}=user
   const res=await fetch('/login',{
    method:'POST',
    headers:{
      "Content-type":"application/json"
    }
    ,
    body:JSON.stringify({
      email,password
    })
  
   });
   const  data= res.json();
   if(res.status===422||!data){
    window.alert("Please enter the information ")
  
   }
   else if(res.status===400 || res.status===401){
    window.alert("please check the password")
   }
   else{
    window.alert("Login successfully")
    setlogin("Log Out")
    nevigate("/cart")
    
  
   
   }
  
  }

  return (
    <div>
         <div>
      
      <div class="input-group mb-3">
      <span class="input-group-text">Email Address</span>
        <input type="email" name='email' value={user.email} onChange={ inputHandel} width={5}  placeholder="Email"  />
       
      </div>
     <div class="input-group mb-3">
        <span class="input-group-text">Password</span>
        <input type="Password"name='password' value={user.password} onChange={ inputHandel} class="form-control" placeholder='Password' aria-label="Amount (to the nearest dollar)" />
       
      </div>
      <button type='submit' onClick={fetchdata} >{login}</button>
    </div>
    </div>
  )
}

export default Login
