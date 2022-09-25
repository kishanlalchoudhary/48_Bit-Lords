import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
    const nevigate= useNavigate()
    const [userData, setuserData] = useState({})
  const callAboutPage = async () => {
    try {
      const res = await fetch("/cart", {
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
      nevigate('/login', { replace: true })
    }
  }

  useEffect(() => {

    callAboutPage()
  }, [])
  return (
    <div>
    <h1>{userData.name}</h1>
    </div>
  )
}

export default Home
