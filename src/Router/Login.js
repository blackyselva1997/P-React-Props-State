import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const Navigate = useNavigate();

    const Product = {
        id : 5,
        name : 'car'
    }

    const goToHome = () => {
        Navigate("/home")
    }
  return (
    <>
        <h1><Link to={"/home?id=40&name=phone"}>Go to Home</Link></h1>
        <h1><Link to={Product.id}>Go to Profile Vivo</Link></h1>
        <h1><Link to={`/profile/${Product.id}/${Product.name}`}>Go to Profile Oppo</Link></h1>
        <button onClick={() => goToHome()}>Go to Home</button>
    </>
  )
}

export default Login