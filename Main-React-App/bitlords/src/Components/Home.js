import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate ,Link} from 'react-router-dom'
import Nev from './Nev'

import '../App.css'
function Home() {
  const nevigate = useNavigate()
  const [userData, setuserData] = useState({})
  const callAboutPage = async () => {
    try {
      const res = await fetch("/home", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"

      })
      const data = await res.json();
      setuserData(data)

      if (!res.status === 200) {
        const error = new Error(res.error)
        throw error;

      }
    } catch (err) {
      console.log(err)
      console.log("this is catch")
      nevigate('/log', { replace: true })
    }
  }

  useEffect(() => {

    callAboutPage()
  }, [])
  return (
    <div>
      <Nev></Nev>
      {/* <!-- Main page starts -->

 <!-- Main landing starts --> */}

      <div class="landing-page container-fluid">
        <div class="container">
          <div class="row landing-main">
            <div class="col-lg-5 col-12 landing-content">
              <h1 class="text-uppercase">vechicle rental made simpler, cheaper and more efficient</h1>
              <p>
                Join our community to become a part of the fastest growing rental service which provides a time efficient and pocket friendly way to travel anytime anywhere.
              </p>
              <div className="landing-btn">
                        <Link className="btn" id="button-color" to="/carform" role="button">Rent Out</Link>
                        <Link className="btn" id="button-color" to="/bike" role="button"> Rent</Link>
                    </div>
            </div>
            <div class="col-lg-7 col-12 landing-image" id="landing-image">
              <img src="landingImage.png" class="img-fluid" alt=""/>
            </div>
          </div>
        </div>
      </div>
      {/* 
<!-- Main landing ends -->

<!-- Testimonial section starts --> */}

      <div class="testimonial">
        <div class="small-container">
          <div class="testrow">
            <div class="testcol">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident qui ad iste veritatis
                voluptate dolores voluptas maiores sequi, aspernatur tempora vero maxime quos iusto delectus
                magni nihil, dolor, sunt </p>
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
                <h3> Shawn Maker</h3>
            </div>
            <div class="testcol">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam adipisci id quasi repudiandae,
                quas esse iusto! Commodi officiis incidunt dignissimos vel distinctio accusamus odit inventore
                rem veniam cupiditate esse</p>
              <img
                src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
                <h3> Francia Rosi</h3>
            </div>
            <div class="testcol">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga neque inventore veritatis minus
                libero, doloribus nihil quod praesentium provident necessitatibus numquam, dolorum architecto
                porro. Quia id maxime soluta necessitatibus </p>
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
                <h3> Sean Maker</h3>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Testimonial section ends -->

<!-- Newsletter section starts --> */}

      <section id="newsletter" class="section-p1">
        <div class="newstext">
          <h4>Subscribe Our Newsletter</h4>
          <p>Subscribe our newsletter to get the latest news, updates, and promotional offers</p>
        </div>
        <div class="form">
          <input type="text" placeholder="Enter Your email address"/>
            <button>Subscribe</button>
        </div>
      </section>
      {/* 
<!-- Newsletter section ends --> */}

      {/* <!-- Footer section starts --> */}

      <section class="footer">
        Copyright &copy TempTravel
      </section>

      {/* <!-- Footer section ends --> */}

      {/* <!-- Main page ends --> */}
    </div>

  )
}

export default Home
