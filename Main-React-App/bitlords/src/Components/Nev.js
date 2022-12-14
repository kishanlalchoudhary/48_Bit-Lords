import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'
function Nev() {
  return (
    <div>
      {/* <!-- Navbar section start --> */}
    <header id="full_nav" className="sticky-top">
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>
                        <img src="/logo.png" className="nav_logo" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-sharp fa-solid fa-bars-staggered"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/contact'} >Contact</Link>
                            </li>
                            <li className="nav-item dropdown me-lg-5">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Vehicle
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/bicycle">Bicycle</Link></li>
                                    <li><Link className="dropdown-item" to="/bike">Bike</Link></li>
                                    <li><Link className="dropdown-item" to="/car">Car</Link></li>
                                    <li><Link className="dropdown-item" to="/cart">your Bookings</Link></li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    </div>
  )
}

export default Nev
