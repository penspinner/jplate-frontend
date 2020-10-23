import React from 'react'
import Link from 'next/link'
import CartItem from './CartItem'

const Cart = (props: { cart: any[]; handleSetCart: any; handleShowCart: any }) => {
  let sum = 0
  props.cart.map((item: { price: number; userSelectedQuantity: number }) => {
    sum += item.price * item.userSelectedQuantity
  })

  if (props.cart[0]) {
    return (
      <div
        id="cartContainer"
        className="overflow-auto absolute bg-white h-3/4 w-5/7 border p-10 max-h-screen z-10"
      >
        <div className="static top-2 pb-4 border-b flex justify-between border-teal-500">
          <div className="text-lg">Shopping cart</div>
          <button
            type="button"
            className="bg-red-300 hover:bg-red-500 pr-3 pl-3 pt-1 pb-1 rounded"
            onClick={props.handleShowCart}
          >
            X
          </button>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-evenly">
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
        <div className="md:pt-10 md:pb-5 md:grid md:grid-cols-2  border-teal-500 md:items-center border-t">
          <div className="text-xl text-center mt-2">Ready to checkout? </div>
          <div className="flex justify-around items-center md:flex md:flex-col md:items-center">
            <div className="m-1">
              Subtotal: <span className="text-lg"> ${sum}</span>
            </div>
            <button
              type="button"
              className="bg-blue-200 hover:bg-blue-400 p-3 m-1 rounded-lg"
              disabled
            >
              <Link href="/Checkout">Proceed to Checkout</Link>
            </button>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="absolute  bg-white h-1/2 w-2/3 border p-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-red-300 hover:bg-red-500 pr-3 pl-3 pt-1 pb-1 rounded"
            onClick={props.handleShowCart}
          >
            x
          </button>
        </div>
        <div className="flex justify-center text-center pt-5 pb-10">
          Cart is empty, start shopping!
        </div>
      </div>
    )
  }
}

export default Cart
