import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import Scripts from './scripts'
import Metatags from './meta'
export default function layouts({children}) {
  return (
   <>
        <Metatags/>
        <Navbar/>
        <main id="main">
        {children}
        </main>
        <Footer/>
        <Scripts/>
    </> 
  )
}
