import React from 'react'
import { BrowserRouter, Navigate, Routes, Route, Link } from 'react-router-dom'
import Login from './Router/Login'
import Profile from './Router/Profile'
import Home from './Router/Home'
import Mobile from './Router/Mobile'

const Router = () => {
  return (
    <BrowserRouter>
    <>
      <h1>Welcome all</h1>
      <Link className='link' to={"/profile"}>{<h2>Selva</h2>}</Link>
    </>
        <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/Profile/:id/:name' element={<Profile/>}></Route>
            <Route path='/profile/:id/:name' element={<Mobile />}></Route>
            <Route path='*' element={<Navigate to={"/home"}></Navigate>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default Router;