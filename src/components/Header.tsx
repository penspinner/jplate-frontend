import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { AuthContext } from '../pages/_app'

const Header = (props: any) => {
  const [auth, setAuth] = useContext(AuthContext)
  const [cookie, setCookie] = useState(null)

  let sum = 0
  if (props.cart) {
    props.cart.map((item: { userSelectedQuantity: number }) => {
      sum += item.userSelectedQuantity
    })
  }

  function handleSignOut() {
    setAuth(false)
    window.localStorage.removeItem('cookie')
    location.reload()
  }

  useEffect(() => {
    setCookie(window.localStorage.cookie)
  }, [])

  return (
    <div className="grid gap-5 grid-cols-4 items-center border-b">
      <span className="h-40">
        <Link href="/">
          <img src="/jplate.ico" style={{ height: '100%%' }} />
        </Link>
      </span>
      {sum >= 1 ? sum : ''}
      <span className="grid grid-cols-2">
        <Link href="/About">About</Link>
        {auth || cookie ? (
          <Link href="/UserProfile">Profile</Link>
        ) : (
          <Link href="/SignIn">Sign in</Link>
        )}
        {auth || cookie ? (
          <Link href="/">
            <button type="button" onClick={handleSignOut}>
              Sign out
            </button>
          </Link>
        ) : (
          ''
        )}
      </span>
      <span></span>
      <span className="grid grid-cols-3 items-center">
        <span></span>
        <span></span>
        <span>
          <img
            id="headerCart"
            style={{ height: '50px' }}
            src="https://image.flaticon.com/icons/svg/25/25619.svg"
            onClick={props.handleShowCart}
          />
        </span>
      </span>
    </div>
  )
}

export default Header
