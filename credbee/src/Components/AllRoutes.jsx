import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin/Admin'
import Customers from './Customers/Customers'
import Demo from './Demo/Demo'
import Navbar from './Homepage/Navbar'
import Login from './LoginSignup/Login'
import Partners from './Partners/Partners'
import Pricing from './Pricing/Pricing'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/login' element={<Login/>}/>
      {/* <Route path='/signup' element={<SignUp/>}/> */}
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/demo' element={<Demo/>}/>
      <Route path='/customers' element={<Customers/>}/>
      <Route path='/partner' element={<Partners/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
  )
}

export default AllRoutes
