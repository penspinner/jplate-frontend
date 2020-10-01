import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="absolute bottom-0 grid gap-4 grid-cols-3">
      <span className="text-center">About Me</span>
      <span className="text-center">Social </span>
      <span className="text-center">Stack</span>
    </div>
  )
}

export default Footer
