import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center flex-col py-1">
        <br></br>
        <br></br>
        <h1 className="text-center font-bold text-2xl ">About me</h1>
        <br></br>
        <div className="text-center w-2/4 text-xl mb-48">
          Hello there, my names Josh! I love learning all things computers and computer software. My
          latest endevor has taken me down the path of web design using JavaScript, Node, Express,
          React, TailwindCSS. I also have extensive experience with system engineering and
          automation/scripting using Windows PowerShell. When I'm not writing code, I enjoy playing
          drums/guitar, reading books about the brain and learning how to correctly wire a circuit
          board.
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
