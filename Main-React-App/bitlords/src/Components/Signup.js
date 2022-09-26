import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'




function Signup() {

  const [worn, setworn] = useState('*')
  const nevigate = useNavigate();
  let [User, setUser] = useState({
    name: "", gmail: "", phone: "", password: "", cpassword: "", address: "", age: "", gender: "", occupation: "", adhar: "",
  })



  let name, value
  const inputHandel = (e) => {
    console.log(User)
    name = e.target.name;
    value = e.target.value;






    setUser({ ...User, [name]: value })

  }
  // this is data fetching using post method .............sending the data to register page in backend ....................;

  const fetchdata = async (e) => {
    e.preventDefault()
    const { name, address, age, gender, occupation, phone, gmail, adhar, password, cpassword, image } = User
    const res = await fetch('/signup', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      }
      ,

      body: JSON.stringify({
        name, gmail, phone, password, cpassword, gender, age, adhar, occupation, address, image
      }),
      image: image

    });
    const data = await res.json();
    console.log(data)
    if (res.status === 422 || !data) {
      window.alert("Please enter the information ")

    }
    else if (res.status === 423) {
      window.alert("User already exist")
    }
    else if (res.status === 425) {
      setworn("please check the password and conferm password")

    }
    else {
      window.alert("your form has been submitted")
      nevigate('/log')

    }

  }

  return (
    <div>
    
      {/* <>
     <form  method='POST'>
      <div className="input-group mb-3">
      <span className="input-group-text">Name</span>
      <input type="text"  name="name" value={value} onChange={inputHandel} className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
      </div>

      <div className="input-group mb-3">
      <span className="input-group-text">Email Address</span>
        <input type="email" name='gmail' value={value} onChange={inputHandel} width={5}  placeholder="Email"  />
       
    </div>

     
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">Contact</span>
        <input type="text" name='phone' value={value}onChange={inputHandel} className="form-control" id="basic-url" aria-describedby="basic-addon3"placeholder="WhatsApp Number" />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Password</span>
        <input type="Password"name='password' value={value}onChange={inputHandel} className="form-control" placeholder='Password' aria-label="Amount (to the nearest dollar)" />
       
      </div>

     
      <div className="input-group mb-3">
        <span className="input-group-text">Confirm Password</span>
        <input type="Password" name='cpassword' value={value}onChange={inputHandel} className="form-control" placeholder='Confirm the password' aria-label="Amount (to the nearest dollar)" />
        <lable>{worn}</lable>
      </div>
    
      </form>

      <div className="input-group mb-3">
      <span className="input-group-text">Age</span>
      <input type="text"  name="age" value={value} onChange={inputHandel} className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
      </div>

      <div className="input-group mb-3">
      <span className="input-group-text">Address</span>
      <input type="text"  name="address" value={value} onChange={inputHandel} className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
      </div>

      <div className="input-group mb-3">
      <span className="input-group-text">Adhar</span>
      <input type="text"  name="adhar" value={value} onChange={inputHandel} className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
      </div>

      <div className="input-group mb-3">
      <span className="input-group-text">Occupation</span>
      <input type="text"  name="occupation" value={value} onChange={inputHandel} className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div className="input-group mb-3">
      <span className="input-group-text">Gender</span>
      <input type="text"  name="gender" value={value} onChange={inputHandel} className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <button type='Submit' onClick={fetchdata}> Submit</button>
    </> */}



      {/* <!-- Signup page starts  --> */}
      <div className="container-fluid main-login main-signup">
        <div className="wrapper login signup d-flex justify-content-center align-items-center">
          <div className="container-md">
            <div className="text-center">
              <form action="" className="rounded bg-white shadow p-sm-3 p-3">
                <div className="logo-signup">
                  <img src="Images\logo-color.png" alt="" />
                </div>
                <h3 className="text-dark fw-bolder fs-4 mb-2">Create an Account</h3>
                <div className="fw-normal text-muted mb-4">
                  Already have an account? <a href="#" className="text-primary text-decoration-none fw-bold">Sign in here</a>
                </div>
                <div className="row row-cols-lg-2 row-cols-1">

                  <div className="form-floating mb-3">
                    <input type="text" name="name" value={value} onChange={inputHandel} className="form-control" id="floatingFirstName" placeholder="name@example.com" />
                    <label for="floatingFirstName" className="tw px-4">First Name</label>
                  </div>
                  {/* <div className="form-floating mb-3">
                                <input type="text"  name="name" value={value} onChange={inputHandel} className="form-control" id="floatingLastName" placeholder="name@example.com" />
                                <label for="floatingLastName" className="tw px-4">Last Name</label>
                            </div> */}
                  <div className="form-floating mb-3">
                    <input type="text" name="age" value={value} onChange={inputHandel} className="form-control" id="floatingAge" placeholder="name@example.com" />
                    <label for="floatingAge" className="tw px-4">Age</label>
                  </div>
                  <div className="form-floating mb-3 d-flex align-items-center flex-lg-row flex-column">
                    <span className="px-4">Gender</span>
                    {/* <div className="gender">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value={value} onChange={inputHandel} id="inlineRadio1"  />
                                        <label className="form-check-label" for="inlineRadio1">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value={value} onChange={inputHandel} id="inlineRadio2"  />
                                        <label className="form-check-label" for="inlineRadio2">Female</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value={value} onChange={inputHandel} id="inlineRadio2"  />
                                        <label className="form-check-label" for="inlineRadio2">Other</label>
                                    </div>
                                </div> */}
                    <div className="input-group mb-3">
                      <span className="input-group-text">Gender</span>
                      <input type="text" name="gender" value={value} onChange={inputHandel} className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="number" name='phone' value={value} onChange={inputHandel} className="form-control" id="floatingPhoneNumber" placeholder="Mobile" />
                    <label for="floatingPhoneNumber" className="tw px-4">Phone Number</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="number" name="adhar" value={value} onChange={inputHandel} className="form-control" id="floatingAadharNumber" placeholder="name@example.com" />
                    <label for="floatingAadharNumber" className="tw px-4">Aadhar Number</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" name="occupation" value={value} onChange={inputHandel} className="form-control" id="floatingOccupation" placeholder="name@example.com" />
                    <label for="floatingOccupation" className="tw px-4">Occupation</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="email" name='gmail' value={value} onChange={inputHandel} className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput" className="tw px-4">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="Password" name='password' value={value} onChange={inputHandel} className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword" className="tw px-4">Password</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="Password" name='cpassword' value={value} onChange={inputHandel} className="form-control" id="floatingConfirmPassword" placeholder="Password" />
                    <label for="floatingConfirmPassword" className="tw px-4">Confirm Password</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Address</label>
                    <textarea type="text" name="address" value={value} onChange={inputHandel} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <div className="form-check d-flex align-items-center">
                    <input className="form-check-input" type="checkbox" id="gridCheck" checked />
                    <label className="form-check-label ms-2 " for="gridCheck">
                      I Agree <a href="#">Terms and conditions</a>.
                    </label>
                  </div>
                </div>
                <button type='Submit' onClick={fetchdata} className="btn btn-primary submit_btn w-50 my-4">SignIn</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Signup page ends  --> */}
    </div>
  )
}

export default Signup
