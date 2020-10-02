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
  // const [plates, setPlates] = useState(null)
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
        const response = await Axios.get('http://localhost:8080/api/getPlates')
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
    <div className="static min-h-full">
      <Header cart={cart} handleShowCart={handleShowCart} />
      <div className="relative flex flex-wrap justify-around pt-4">
        {showCart ? <Cart cart={cart} handleSetCart={handleSetCart} /> : ''}
        {plates
          ? plates.map((plate: any) => {
              return (
                <div className="p-4">
                  <Plate
                    key={Math.random()}
                    cart={cart}
                    plate={plate}
                    handleSetCart={handleSetCart}
                  />
                </div>
              )
            })
          : ''}
      </div>
      <Footer />
    </div>
  )
}

export default Index
