import React from 'react'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
function Login() {
   const [login ,setlogin]=useState("Login")
    let [user,setuser]=useState({
        gmail:"",
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
    const { gmail,password}=user
   const res=await fetch('/login',{
    method:'POST',
    headers:{
      "Content-type":"application/json"
    }
    ,
    body:JSON.stringify({
      gmail,password
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
    nevigate("/home")
    
  
   
   }
  
  }

  return (
    <div>
         {/* <div>
      
      <div class="input-group mb-3">
      <span class="input-group-text">Email Address</span>
        <input type="email" name='gmail' value={user.gmail} onChange={ inputHandel} width={5}  placeholder="Email"  />
       
      </div>
     <div class="input-group mb-3">
        <span class="input-group-text">Password</span>
        <input type="Password"name='password' value={user.password} onChange={ inputHandel} class="form-control" placeholder='Password' aria-label="Amount (to the nearest dollar)" />
       
      </div>
      <button type='submit' onClick={fetchdata} >{login}</button>
    </div> */}
    <div class="container-fluid main-login">
        <div class="wrapper login d-flex justify-content-center align-items-center">
            <div class="container">
                <div class="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-lg-4 text-center">
                    <div class="logo">
                        <img src="/logo.png" alt=""/>
                    </div>
                    <form action="" class="rounded bg-white shadow p-sm-5 p-3">
                        <h3 class="text-dark fw-bolder fs-4 mb-2">Login to TempTravel</h3>
                        <div class="fw-normal text-muted mb-4">
                            New Here? <Link to='/sign' class="text-primary text-decoration-none fw-bold">Create an
                                Account</Link>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" name='gmail' value={user.gmail} onChange={ inputHandel}  class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="Password" name='password' value={user.password} onChange={ inputHandel} class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="mt-2 text-end">
                            <a href="#" class="text-primary fw-bold text-decoration-none">Forgot Password?</a>
                        </div>
                        <button type="submit" class="btn btn-primary submit_btn w-100 my-4">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Login
