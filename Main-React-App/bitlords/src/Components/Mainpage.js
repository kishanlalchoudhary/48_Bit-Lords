import React from 'react'
import {Link} from 'react-router-dom'

function Mainpage() {
  return (
    <div>
      <h1>main page</h1>
      <Link to={'/home'}>Home</Link>
      <Link to={'/bike'}>Bike</Link>
      <Link to={'/log'}>Login</Link>
      <Link to={'/signup'}>Signup</Link>




    </div>
  )
}

export default Mainpage
