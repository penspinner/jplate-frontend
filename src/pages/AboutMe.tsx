import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
<<<<<<< HEAD
      <div className="flex items-center flex-wrap md:flex-no-wrap justify-around h-full">
        <div className="sm: w-full lg:w-2/4 md:text-xl">
=======
      <div className="flex flex-wrap flex-grow items-center justify-center">
        <div className="sm: w-full lg:w-1/2 text-center ">
>>>>>>> 967932330d7ad8000926438b6f22cbed45c0d8c7
          <h1 className=" text-center font-bold text-2xl pb-5 underline ">About me</h1>
          <p className="pl-6 pr-6 text-lg">
            {`Hello there, my names Josh! I love learning all things computers and computer
            software. My latest endevor has taken me down the path of web design using JavaScript,
            Node, Express, React, TailwindCSS. I also have extensive experience with system
            engineering and automation/scripting using Windows PowerShell. When I'm not writing
            code, I enjoy playing drums/guitar, reading books about the brain and exploring new
            cities.`}
          </p>
        </div>
<<<<<<< HEAD
        <img
          src="/joshdrum.jpg"
          className="m-4 rounded-lg"
          style={{ height: '30rem', width: 'auto' }}
        />
=======
        <div className="sm: w-full lg:w-1/2 flex justify-center">
          <img
            src="/joshdrum.jpg"
            className="rounded-lg mb-5 mt-5"
            style={{ height: '100%', width: 'auto' }}
          />
        </div>
>>>>>>> 967932330d7ad8000926438b6f22cbed45c0d8c7
      </div>
      <Footer />
    </div>
  )
}

export default About
