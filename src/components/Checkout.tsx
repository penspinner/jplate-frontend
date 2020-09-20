import React, { useState } from 'react'
import UserDataFrom from './UserDataForm'
import CartItem from './CartItem'

const Checkout = (props: {
  cart: any[]
  handleSetCart: (arg0: any) => void
  sum: React.ReactNode
  handleOrderSubmitted: any
  handleShowCheckout: any
}) => {
  return (
    <div id="checkoutContainer">
      <div className="cartTitle">Checkout</div>
      <div id="checkoutBody">
        <div>
          {props.cart.map((item: any) => {
            return (
              <CartItem
                key={Math.random()}
                cart={props.cart}
                handleSetCart={props.handleSetCart}
                item={item}
              />
            )
          })}
          <div id="cartSubTotal">Subtotal: ${props.sum}</div>
        </div>
        <UserDataFrom
          cart={props.cart}
          total={props.sum}
          handleOrderSubmitted={props.handleOrderSubmitted}
          handleSetCart={props.handleSetCart}
          handleShowCheckout={props.handleShowCheckout}
        />
      </div>
    </div>
  )
}

export default Checkout
