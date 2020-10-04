/**
 * https://nextjs.org/docs/advanced-features/custom-app
 */

import { AppProps } from 'next/app'
import React, { useState, createContext } from 'react'
import '@/styles.css'

export const AuthContext = createContext(null)

const App = ({ Component, pageProps }: AppProps) => {
  const [auth, setAuth] = useState(false)
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  )
}

export default App
