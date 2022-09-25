import React from 'react'
import {Link} from 'react-router-dom'

function Mainpage() {
  return (
    <div>
      <h1>main page</h1>
      <Link to={'/home'}>Home</Link>

    </div>
  )
}

export default Mainpage
