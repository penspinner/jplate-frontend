import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EditUserProfile from '../components/EditUserProfile'
import OrderHistoryItem from '../components/OrderHistoryItem'

const UserProfile = () => {
  const user = JSON.parse(window.localStorage.getItem('cookie'))
  const [orderHistory, setOrderHistory] = useState([])

  // let mount = false
  useEffect(() => {
    // mount = true
    async function dataFetch() {
      try {
        const orderHistoryFetch = (await Axios.get(`/getOrders/${user.email}`)).data
        setOrderHistory(orderHistoryFetch)
      } catch (err) {
        console.error(err)
      }
    }
    dataFetch()
  }, [user.email])
  const [edit, setEdit] = useState(false)
  const handleSubmit = () => {
    event.preventDefault()
    setEdit(!edit)
  }

  return (
    <>
      {!user ? (
        <Redirect to="/" />
      ) : (
        <div>
          <Header />
          <div className="welcomeText">Hello {user.firstName}!</div>
          <div className="pastOrdersContainer">
            <div className="pastOrderHeader">Past Orders</div>
            {orderHistory.map((order) => {
              return <OrderHistoryItem key={Math.random()} order={order} />
            })}
          </div>

          {!edit ? (
            <form className="infoCard">
              First name, Last name:
              <div className="userInfo">
                {user.firstName} {user.lastName}
              </div>
              Email:
              <div className="userInfo">{user.email}</div>
              Password:
              <div className="userInfo"> *******</div>
              <button type="submit" className="signInSubmit" onClick={handleSubmit}>
                Change password
              </button>
            </form>
          ) : (
            <EditUserProfile />
          )}
          <Footer />
        </div>
      )}
    </>
  )
}

export default UserProfile
