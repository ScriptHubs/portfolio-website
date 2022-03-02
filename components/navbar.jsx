import React from 'react'
import Link from "next/link";
export default function navbar() {
  return (
    <header id="header" className="fixed-top">
  <div className="container-fluid d-flex justify-content-between align-items-center">
    <h1 className="logo me-auto me-lg-0">
      <Link href="index.html">PVV.</Link>
    </h1>
    {/* Uncomment below if you prefer to use an image logo */}
    {/* <Link href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
    <nav id="navbar" className="navbar order-last order-lg-0">
      <ul>
        <li>
          <Link className="active" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
        <li>
          <Link href="/service">Services</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>
    {/* .navbar */}
  </div>
</header>

  )
}
