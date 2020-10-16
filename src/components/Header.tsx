import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { AuthContext } from '../pages/_app'

const Header = (props: any) => {
  const [auth, setAuth] = useContext(AuthContext)
  const [cookie, setCookie] = useState(null)
  const [hamMenuShown, setShowHam] = useState(false)
  const [stateWindow, setWindow] = useState({})

  let sum = 0
  if (props.cart) {
    props.cart.map((item: { userSelectedQuantity: number }) => {
      sum += item.userSelectedQuantity
    })
  }

  function toggleHamburgerMenu() {
    setShowHam(!hamMenuShown)
  }

  function getCurrentPath() {
    if (stateWindow.hasOwnProperty('location')) {
      return stateWindow['location']['pathname']
    }
  }

  // function handleSignOut() {
  //   setAuth(false)
  //   window.localStorage.removeItem('cookie')
  //   location.reload()
  // }

  useEffect(() => {
    setWindow(window)
    setCookie(window.localStorage.cookie)
  }, [])
  if (hamMenuShown) {
    return (
      <div className="flex flex-col border-b border-teal-500 h-full z-10 ">
        <div className="ml-2">
          <img src="/hamburger-menu.svg" style={{ height: '4rem' }} onClick={toggleHamburgerMenu} />
        </div>
        <div className="flex flex-col h-full">
          <div className="bg-teal-200 h-56 flex flex-row items-center text-3xl p-5 border-b">
            {getCurrentPath() === '/' ? (
              <button type="button" onClick={toggleHamburgerMenu}>
                Home
              </button>
            ) : (
              <Link href="/">Home</Link>
            )}
          </div>
          <div className="bg-teal-300 h-56 flex flex-row items-center text-3xl p-5 border-b">
            {getCurrentPath() === '/AboutMe' ? (
              <button type="button" onClick={toggleHamburgerMenu}>
                About Me
              </button>
            ) : (
              <Link href="/AboutMe">About Me</Link>
            )}
          </div>
          <div className="bg-teal-400 h-56 flex flex-row items-center text-3xl p-5">
            {getCurrentPath() === '/WhatIsThis' ? (
              <button type="button" onClick={toggleHamburgerMenu}>
                What is this?
              </button>
            ) : (
              <Link href="/WhatIsThis">What is this?</Link>
            )}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex justify-evenly items-center border-b border-teal-500 max-h-20">
        <div className="sm:block md:hidden">
          <img src="/hamburger-menu.svg" style={{ height: '4rem' }} onClick={toggleHamburgerMenu} />
        </div>
        <span className="h-24 flex justify-center items-center p-2">
          <Link href="/">
            <img
              className=" opacity-80 hover:opacity-50 cursor-pointer"
              src="/jplate-dark.png"
              style={{ height: '100%', width: 'auto' }}
            />
          </Link>
        </span>
        <span className="sm: hidden md:block lg:block text-xl items-center">
          <Link href="/WhatIsThis">
            <span className="hover:opacity-50 cursor-pointer">What is this? </span>
          </Link>
          {/* {auth || cookie ? (
          //   <Link href="/UserProfile">
          //     <span className="hover:opacity-50">Profile</span>
          //   </Link>
          // ) : (
          //   <Link href="/SignIn">
          //     <span className="hover:opacity-50">Sign in</span>
          //   </Link>
          // )}
          // {auth || cookie ? (
          //   <Link href="/">
          //     <button type="button" onClick={handleSignOut}>
          //       <span className="hover:opacity-50">Sign out</span>
          //     </button>
          //   </Link>
          // ) : (
          //   ''
          )} */}
        </span>
        <span className="sm: hidden md:block lg:block text-xl">
          <Link href="/AboutMe">
            <span className="hover:opacity-50 cursor-pointer"> About Me</span>
          </Link>
        </span>
        <div className="hidden md:block md:flex md:items-end">
          <img
            id="headerCart"
            style={{ height: '3rem' }}
            className="hover:opacity-50"
            src="https://image.flaticon.com/icons/svg/25/25619.svg"
            onClick={props.handleShowCart}
          />
          <div className="w-2">{sum >= 1 ? sum : ''}</div>
        </div>
      </div>
    )
  }
}

export default Header
