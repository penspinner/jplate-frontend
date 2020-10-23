import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CheckoutItem from '../components/CheckoutItem'

const Checkout = (props) => {
  let sum = 0
  props.cart.map((item: { price: number; userSelectedQuantity: number }) => {
    sum += item.price * item.userSelectedQuantity
  })
  return (
    <div className="flex flex-col min-h-screen">
      <Header cart={props.cart} handleShowCart={props.handleShowCart} />
      <div className="bg-teal-100  flex flex-col md:flex-row">
        <div className="flex flex-col items-center m-6">
          {props.cart.map((item) => {
            return (
              <CheckoutItem
                key={Math.random()}
                item={item}
                cart={props.cart}
                handleSetCart={props.handleSetCart}
              />
            )
          })}
        </div>
        <div className="bg-white rounded-lg m-6 p-8 flex flex-col md:flex-row md:w-1/3">
          {`This is only a mock webstore, you can't actually buy these plates but in case you were
          wondering your subtotal is $${sum}.00.`}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Checkout
