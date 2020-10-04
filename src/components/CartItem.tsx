import React, { useState } from 'react'
import QuantitySelector from './QuantitySelector'
import { removeFromCart } from '../utils/utilsFunctions'

const CartItem = (props: {
  item: { name: React.ReactNode; price: React.ReactNode; imageURL: string }
  cart: any
  handleSetCart: (arg0: any) => void
}) => {
  return (
    <div className="w-full grid grid-flow-row grid-cols-3 gap-5 pr-5 pl-5 pb-5 pt-5 hover:bg-gray-200 rounded-lg justify-items-center items-center">
      <span>
        <img className="h-56 w-64" src={props.item.imageURL} />
      </span>

      <span className="flex flex-col justify-center items-center">
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
          className="static right-0 bg-red-300 hover:bg-red-500 p-2 rounded-lg"
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
