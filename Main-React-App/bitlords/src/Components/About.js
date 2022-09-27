import React from 'react'
import Nev from './Nev'
function About() {
  return (
    <div>
      <Nev></Nev> 
      <div class="container-fluid aboutUSLanding">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-5 col-12 about-image my-sm-5 my-2">
                    <img src="about-us.png" class="img-fluid" alt=""/>
                </div>
                <div class="col-lg-7 col-12 about-content my-4">
                    <h1 class="text-uppercase fw-bolder fs-1">About Us</h1>
                    <p class="">
                        TempTravel being the the fast growing rental service of all time, we here provide users with a very smooth process of renting vehicles by following just a few steps.
                    </p>
                    <h2 class="fw-bold fs-2">Why TempTravel ?</h2>
                    <p>
                        We here at TempTravel have launched a user-friendly platform with a vision of providing people with the basic transportation needs ensuring that they save more money and time, which is the current need of the hour. This platform not only provides rental services but we also enable the local people to generate a side-by-side income source.
                    </p>
                    <p>
                        Our mission is to make travelling more efficient and focus on the overall development of humankind which we are sure to accomplish!
                    </p>
                </div>
            </div>
        </div>
    </div>
{/* 
    <!-- About Page CSS ends -->
    
    <!-- Footer section starts --> */}

    <section class="footer">
        Copyright &copy TempTravel
    </section>
    </div>
  )
}

export default About
