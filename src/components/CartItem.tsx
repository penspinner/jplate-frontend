import React, { useState } from 'react'
import QuantitySelector from './QuantitySelector'
import { removeFromCart } from '../utils/utilsFunctions'

const CartItem = (props: {
  item: { name: React.ReactNode; price: React.ReactNode; imageURL: string }
  cart: any
  handleSetCart: (arg0: any) => void
}) => {
  return (
    <div className="hover:bg-gray-200 rounded-lg pt-5 pb-5 w-full flex flex-col md:grid md:grid-flow-row md:grid-cols-3 md:gap-5 md:pr-5 md:pl-5 md:pb-5 md:pt-5 md:justify-center items-center">
      <span>
        <img className="h-56 w-64" src={props.item.imageURL} />
      </span>

      <span className="md:flex md:flex-col md:justify-center md:items-center">
        <div className="text-xl font-bold text-center">{props.item.name}</div>
        <div className=" pt-2 text-md">
          Price per plate: <span className="text-lg">${props.item.price}</span>
        </div>
        <QuantitySelector cart={props.cart} item={props.item} handleSetCart={props.handleSetCart} />
      </span>
      <span>
        <button
          type="button"
          id="removeFromCart"
          className="md:static md:right-0 bg-red-300 hover:bg-red-500 md:p-2 ml-48 rounded-lg mt-4 mb-1 mr-1 p-2"
          onClick={() => {
            const newCart = removeFromCart(props.cart, props.item)
            props.handleSetCart(newCart)
          }}
        >
          Remove Item
        </button>
      </span>
    </div>
  )
}

export default CartItem
