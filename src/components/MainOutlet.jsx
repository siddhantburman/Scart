import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const MainOutlet = ()=> {
  const [items , setItems] = useState(0)  
  const [price , setPrice] = useState(0)
  console.log(price)
    return (
    <>
      <Navbar items={items} price={price}/>
      <Outlet context={{items , setItems, price, setPrice}}/>
      <Footer />
    </>
  )
}

export default MainOutlet