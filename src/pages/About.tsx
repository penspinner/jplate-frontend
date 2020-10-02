import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <Header />
      <div className="flex items-center flex-col ">
        <h1 className="text-center font-bold "> About me</h1>
        <div className="text-center w-2/4">
          Hello there, my names Josh! I love learning all things computers and computer software. My
          latest endevor has taken me down the path of web design using JavaScript, Node, Express,
          React, TailwindCSS. I also have extensive experience with system engineering and
          automation/scripting using Windows PowerShell. When I'm not writing code, I enjoy playing
          drums/guitar, reading books about the brain and learning how to correctly wire a circuit
          board.
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
