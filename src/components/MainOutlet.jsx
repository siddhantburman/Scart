import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const MainOutlet = ()=> {
    return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer />
    </>
  )
}

export default MainOutlet