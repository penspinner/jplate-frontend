import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const WhatIsThis = () => {
  return (
    <div>
      <Header />
      <div className="w-auto text-left h-screen flex-col items-center justify-center ">
        <h1 className="text-center underline pb-8 pt-16">What is JPlate?</h1>
        <article className="text-center pb-8">
          JPlate is a mock online store that my team and I created to gain experience with the
          following technologies:
        </article>
        <div className="flex justify-center">
          <table className="flex-col justify-center text-left ">
            <tr>
              <td className="text-green-400">&#10003;</td>
              <td>React Hooks JS</td>
            </tr>
            <tr>
              <td className="text-green-400">&#10003;</td>
              <td>Next JS</td>
            </tr>
            <tr>
              <td className="text-green-400">&#10003;</td>
              <td>Tailwind CSS </td>
            </tr>
            <tr>
              <td className="text-green-400">&#10003;</td>
              <td>PostgreSQL </td>
            </tr>
            <tr>
              <td className="text-green-400">&#10003;</td>
              <td>Heroku</td>
            </tr>
            <tr>
              <td className="text-green-400">&#10003;</td>
              <td>TypeScript </td>
            </tr>
            <tr>
              <td className="text-green-400">&#10003;</td>
              <td>Webpack </td>
            </tr>
          </table>
        </div>
        <article className="pt-16 text-center">
          JPlate is meant to be an imitation online store. This current version has the cart
          functionality. In the next version we will implement the sign in/sign up and checkout
          functionalities.
        </article>
      </div>
      <Footer />
    </div>
  )
}

export default WhatIsThis
