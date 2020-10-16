import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const WhatIsThis = () => {
  const technologyUsed = [
    'React Hooks JS',
    'Next JS',
    'Tailwind CSS',
    'PostgreSQL',
    'Heroku',
    'TypeScript',
<<<<<<< HEAD
    'Webpack'
=======
    'Webpack',
>>>>>>> 967932330d7ad8000926438b6f22cbed45c0d8c7
  ]
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-col flex-wrap flex-grow items-center justify-center ">
        <h1 className="text-center underline pb-8 pt-16">What is JPlate?</h1>
<<<<<<< HEAD
        <article className="text-center pb-8 pr-4 pl-4">
=======
        <article className="text-center pb-4 pr-4 pl-4">
>>>>>>> 967932330d7ad8000926438b6f22cbed45c0d8c7
          JPlate is a mock online store that my team and I created to gain experience with the
          following technologies:
        </article>
        <div className="flex justify-center">
          <table>
            <tbody className="text-center">
              <tr>
                {technologyUsed.map((item) => {
                  return (
                    <td key={Math.random()} className="flex text-left">
                      <span className="text-green-400">&#10003;</span> {item}
                    </td>
                  )
                })}
              </tr>
            </tbody>
          </table>
        </div>
<<<<<<< HEAD
        <article className="pt-16 pr-4 pl-4 text-center">
=======
        <article className="flex text-center justify-center items-center mb-16 mt-4 md:mr-48 md:ml-48">
>>>>>>> 967932330d7ad8000926438b6f22cbed45c0d8c7
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
