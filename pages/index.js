import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
      <a href="about.html" className="btn-about">
        About Me
      </a>
    </div>
  </section>
  {/* End Hero */}
</>

  )
}
