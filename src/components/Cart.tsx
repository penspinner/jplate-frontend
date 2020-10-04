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
      <div id="cartContainer" className="absolute rounded-lg bg-white h-1/2 w-2/3 border p-10">
        <div className="static pb-4 border-b text-2xl">Shopping Cart</div>
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
        <div className="pt-10 pb-5 grid grid-cols-2 border-t items-center">
          <div className="text-xl text-center">Ready to checkout? </div>
          <div className="flex flex-col items-center">
            <div id="cartSubTotal">
              Subtotal: <span className="text-lg"> ${sum}</span>
            </div>
            <button
              type="button"
              className="bg-blue-200 hover:bg-blue-400 p-2 mt-4 rounded-lg"
              onClick={handleShowCheckout}
            >
              Proceed to checkout
            </button>
          </div>
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
