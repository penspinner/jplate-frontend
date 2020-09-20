import React, { useContext } from 'react'
import Link from 'next/link'
import { AuthContext } from '../pages/_app'

const Header = (props: any) => {
  const [auth, setAuth] = useContext(AuthContext)
  const [cookie, setCookie] = React.useState(null)
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

  React.useEffect(() => {
    setCookie(window.localStorage.cookie)
  }, [])

  return (
    <div id="header">
      <h1>
        <Link href="/">JPlate</Link>
      </h1>
      <div className="headerLinks">
        <div className="linkItem">
          <img
            id="headerCart"
            src="https://image.flaticon.com/icons/svg/25/25619.svg"
            onClick={props.handleShowCart}
          />
          {sum >= 1 ? sum : ''}
        </div>
        <div className="linkItem">
          <h2>
            <Link href="/About">About</Link>
          </h2>
        </div>
        {auth || cookie ? (
          <div className="linkItem">
            <h2>
              <Link href="/Profile">Profile</Link>
            </h2>
          </div>
        ) : (
          <div className="linkItem">
            <h2>
              <Link href="/SignIn">Sign in</Link>
            </h2>
          </div>
        )}
        {auth || cookie ? (
          <div className="linkItem">
            <h2>
              {/* <Link href="/" onClick={handleSignOut}>
                Sign out
              </Link> */}
            </h2>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Header
