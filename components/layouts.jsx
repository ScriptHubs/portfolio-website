import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
export default function layouts({children}) {
  return (
   <>
        <Navbar/>
        {children}
        <Footer/>
    </> 
  )
}
