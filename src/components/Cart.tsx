import React, { useState } from 'react'
import CartItem from './CartItem'
import Checkout from './Checkout'
import OrderSubmitted from './OrderSubmitted'

const Cart = (props: { cart: any[]; handleSetCart: any }) => {
  const [checkout, setCheckout] = useState(false)
  const [orderSubmitted, setOrderSubmitted] = useState(false)
  function handleShowCheckout() {
    setCheckout(!checkout)
  }

  function handleOrderSubmitted() {
    setOrderSubmitted(!orderSubmitted)
  }

  let sum = 0
  props.cart.map((item: { price: number; userSelectedQuantity: number }) => {
    sum += item.price * item.userSelectedQuantity
  })

  if (checkout) {
    return (
      <Checkout
        cart={props.cart}
        handleSetCart={props.handleSetCart}
        sum={sum}
        handleOrderSubmitted={handleOrderSubmitted}
        handleShowCheckout={handleShowCheckout}
      />
    )
  }

  if (props.cart[0] && orderSubmitted === false) {
    return (
      <div id="cartContainer" className="absolute bg-white h-1/2 w-2/3 border p-10">
        <div className="static pb-4 border-b">Shopping Cart</div>
        <div className="flex flex-col flex-wrap items-center">
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
        </div>
        <div id="cartSubTotal">Subtotal: ${sum}</div>
        <div id="cartProceedButton">
          <button type="button" onClick={handleShowCheckout}>
            Proceed to checkout
          </button>
        </div>
      </div>
    )
  } else if (orderSubmitted) {
    return <OrderSubmitted handleOrderSubmitted={handleOrderSubmitted} />
  } else {
    return (
      <div id="cartContainer" className="absolute bg-white pr-56 pl-56 pt-10 pb-10 border">
        <div id="cartEmpty">Cart is empty, start shopping!</div>
      </div>
    )
  }
}

export default Cart
