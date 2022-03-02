import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <>
  {/* ======= Hero Section ======= */}
  <section id="hero" className="d-flex align-items-center">
    <div
      className="container d-flex flex-column align-items-center"
      data-aos="zoom-in"
      data-aos-delay={100}
    >
      <h1>Patrick Vince Velasco</h1>
      <h2>Web Developer</h2>
      <Link href="/about" >
        <a className="btn-about"> About Me</a>
      </Link>
      
    </div>
    
  </section>
  {/* End Hero */}
</>

  )
}
