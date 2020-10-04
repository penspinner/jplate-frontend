import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="bg-black w-full h-56 relative bottom-0 grid grid-cols-3 items-center">
      <span className="flex justify-center">
        <a href="https://github.com/mallockey" target="_blank">
          <img className="cursor-pointer" src="./GitHub-Mark-Light-64px.png" />
        </a>
      </span>
      <span className="flex justify-center">
        <a href="https://www.linkedin.com/in/joshua-melo/" target="_blank">
          <img className="cursor-pointer" src="./linkedin.svg" style={{ height: '50px' }}></img>
        </a>
      </span>
      <span className="flex justify-center">
        <a href="https://www.instagram.com/joshmelo/" target="_blank">
          <img className="cursor-pointer" src="./insta.svg" style={{ height: '50px' }}></img>
        </a>
      </span>
    </div>
  )
}

export default Footer
