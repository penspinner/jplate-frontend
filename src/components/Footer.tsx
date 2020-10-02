import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="bg-black w-full h-32 relative bottom-0 grid gap-4 grid-cols-3 items-center">
      <span className="flex justify-center">
        <Link href="https://github.com/mallockey">
          <img src="./GitHub-Mark-Light-64px.png" />
        </Link>
      </span>
      <span className="text-center text-white">Social </span>
      <span className="text-center text-white">Stack</span>
    </div>
  )
}

export default Footer
