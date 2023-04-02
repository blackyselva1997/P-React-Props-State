import React from 'react'
import { useNavigate } from 'react-router-dom'

const Mobile = () => {
    const Navigate = useNavigate();

    const goToHome = () => {
        Navigate("/home");
    }
  return (
    <>
        <button onClick={() => goToHome()}>Go to Home</button>
    </>
  )
}

export default Mobile