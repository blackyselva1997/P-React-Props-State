import React from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const Home = () => {
    const Navigate = useNavigate();

    const goToProfile = () => {
        Navigate("/Profile");
    }

    const goToLogin = () => {
      Navigate("/");
    }

    const [serachParams] = useSearchParams();
    console.log(serachParams.get('id') , serachParams.get('name'));
  return (
    <>
        <h1>Home</h1>
        <h3><Link to={"/Profile"}>Go to Profile</Link></h3>
        <button onClick={() => goToProfile()}>Go to Profile</button>
        <button onClick={() => goToLogin()}>Go to Login</button>
    </>
  )
}

export default Home;