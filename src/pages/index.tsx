import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Plate from '../components/Plate'
import plates from '../utils/productDummyData'
import Cart from '../components/Cart'

const Index = () => {
  const [cart, setCart] = useState([])
  const [showCart, setCartShow] = useState(false)

  function handleShowCart() {
    setCartShow(!showCart)
  }

  function handleSetCart(newCart: any) {
    setCart([...newCart])
  }

  useEffect(() => {
    let effectRan = false

    async function dataFetch() {
      try {
        // const response = await Axios.get('http://localhost:8080/api/getPlates')
        if (!effectRan) {
          // setPlates(response.data)
        }
      } catch (err) {
        effectRan = true
        console.error(err)
      }
    }
    dataFetch()
  }, [])

  return (
    <>
      <Head>
        <title>JPlate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta property="og:title" content="JPlate" />
        <meta property="og:image" content="/pageImage.png" />
        <meta property="og:url" content="http://jplate-frontend.vercel.app/" />
        <meta
          property="og:description"
          content="A mock website that sells plates. Built with React Hooks and Next JS. Styles with TailwindCSS."
        />
      </Head>
      <div className="static min-h-full">
        <Header cart={cart} handleShowCart={handleShowCart} />
        <div className="relative bg-teal-100 flex flex-wrap justify-evenly pt-4">
          {showCart ? (
            <Cart cart={cart} handleSetCart={handleSetCart} handleShowCart={handleShowCart} />
          ) : (
            ''
          )}
          {plates
            ? plates.map((plate: any) => {
                return (
                  <div key={Math.random()} className="p-4">
                    <Plate cart={cart} plate={plate} handleSetCart={handleSetCart} />
                  </div>
                )
              })
            : ''}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Index
