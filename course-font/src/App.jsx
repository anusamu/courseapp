import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Add from './components/Add'
import Home from './components/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {
  
  const location=useLocation()

  return (
    <>
    {/* {location.pathname !=='/' && <Nav /> }
       <br /> <br /> */}
      <Routes>
      <Route path = '/' element = {<Login />}></Route>
      <Route element={<PrivateRoute/>}>
      <Route path='/home' element={<Home/>}></Route>
      <Route path = '/add' element = {<Add />}></Route>
      </Route>
      </Routes>
    </>
  )
}

export default App
