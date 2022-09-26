import React from 'react'
import {Link} from 'react-router-dom'



function Mainpage() {
  return (
    <div>
      {/* <h1>main page</h1>
      <Link to={'/home'}>Home</Link>
      <Link to={'/bike'}>Bike</Link>
      <Link to={'/log'}>Login</Link>
      <Link to={'/signup'}>Signup</Link> */}

      {/*  <!-- Landing Page CSS starts --> */}

    <div className="landing-page container-fluid">
        <div className="container">
            <div className="row landing-main">
                <div className="col-12 landing-nav">
                    <img src="/logo.png" className="landing-logo" alt="" />
                    <div className="landing-btn">
                        <a className="btn" id="button-color" href="#" role="button">Login</a>
                        <a className="btn" id="button-color" href="#" role="button">Signup</a>
                    </div>
                </div>
                <div className="col-lg-5 col-12 landing-content">
                    <h1 className="text-uppercase">vechicle rental made simpler, cheaper and more efficient</h1>
                    <p>
                        Join our community to become a part of the fastest growing rental service which provides a time efficient and pocket friendly way to travel anytime anywhere.
                    </p>
                </div>
                <div className="col-lg-7 col-12 landing-image" id="landing-image">
                    <img src="/landingImage.png" className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    </div>






    </div>
  )
}

export default Mainpage
