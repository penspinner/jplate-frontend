/**
 * https://nextjs.org/docs/advanced-features/custom-app
 */

import { AppProps } from 'next/app'
import React, { useState, createContext } from 'react'
import '@/styles.css'

export const AuthContext = createContext(null)

const App = ({ Component, pageProps }: AppProps) => {
  const [auth, setAuth] = useState(false)
  const [cart, setCart] = useState([])
  const [showCart, setCartShow] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  function handleShowCart() {
    setCartShow(!showCart)
  }

  function handleSetCart(newCart: any) {
    setCart([...newCart])
  }

  function handleAddedToCart() {
    setAddedToCart(!addedToCart)
    setTimeout(() => {
      setAddedToCart(false)
    }, 2000)
  }

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      <Component
        {...pageProps}
        cart={cart}
        handleSetCart={handleSetCart}
        handleShowCart={handleShowCart}
        setCartShow={setCartShow}
        showCart={showCart}
        handleAddedToCart={handleAddedToCart}
        addedToCart={addedToCart}
      />
    </AuthContext.Provider>
  )
}

export default App
