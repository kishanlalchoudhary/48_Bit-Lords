import React from 'react'
import Nev from './Nev'

function Contact() {
  return (
    <div>
      <Nev/>
      
    {/* <!-- Navigation section ends -->

<!-- Contact us page starts --> */}

<div class="container-fluid aboutUSLanding">
    <div class="container">
        <div class="row justify-content-center align-items-center">
            <div class="col-lg-5 col-12 about-image my-sm-5 my-2">
                <img src="contact-us.jpg" class="img-fluid" alt=""/>
            </div>
            <div class="col-lg-7 col-12 about-content my-4">
                <h1 class="text-uppercase fw-bolder text-center fs-1">Contact Us</h1>
                <div class="row contact-content m-sm-m m-2">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingFirstName" placeholder="name@example.com"/>
                        <label for="floatingFirstName" class="tw px-4">First Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingLastName" placeholder="name@example.com"/>
                        <label for="floatingLastName" class="tw px-4">Last Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingEmail" class="tw px-4">Email address</label>
                    </div>
                    <div class="mb-3">
                        <label for="floatingMessage" class="form-label">Message</label>
                        <textarea class="form-control" id="floatingMessage" rows="3"></textarea>
                      </div>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- Contact us page ends -->

<!-- Footer section starts --> */}

<section class="footer">
    Copyright &copy TempTravel
</section>

{/* <!-- Footer section ends --> */}
    </div>
  )
}

export default Contact
