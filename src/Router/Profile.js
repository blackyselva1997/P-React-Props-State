import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Profile = () => {
    const params = useParams();
    console.log("params", params);

    const Navigate = useNavigate();
    const goToHome = () => {
        Navigate("/Home")
    }

    const goToLogin = () => {
      Navigate("/")
    }
  return (
    <>
        <h1>Profile</h1>
        <button onClick={() => goToHome()}>Go to Home</button>
        <button onClick={() => goToLogin()}>Go to Login</button>
    </>
  )
}

export default Profile;