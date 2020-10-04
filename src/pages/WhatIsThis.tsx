import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const WhatIsThis = () => {
  return (
    <div>
      <Header />
      <div className="pl-40 pr-40 pt-10 pb-20">
        <h1 className="pb-10 font-bold text-center">What is JPlate?</h1>

        <article className="pb-2">
          JPlate is a mock online store that my team and I created to gain experience with the
          following technologies:
        </article>
        <article>
          <li>React hooks JS</li>
          <li>Next JS</li>
          <li>Tailwind CSS</li>
          <li>PostgreSQL</li>
          <li>Heroku</li>
          <li>TypeScript</li>
          <li>Webpack</li>
        </article>
        <article className="pt-2">
          JPlate is meant to be an imiitation online store. This current version has the cart
          functionality. In the next version we will implement the sign in/sign up and checkout
          functionalities.
        </article>
      </div>
      <Footer />
    </div>
  )
}

export default WhatIsThis
