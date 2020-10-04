import React, { useState } from 'react'
import QuantitySelector from './QuantitySelector'
import { removeFromCart } from '../utils/utilsFunctions'

const CartItem = (props: {
  item: { name: React.ReactNode; price: React.ReactNode; imageURL: string }
  cart: any
  handleSetCart: (arg0: any) => void
}) => {
  return (
    <div className="grid grid-flow-row grid-cols-4 pr-5 pl-5 pb-5 pt-5 hover:bg-gray-200 rounded-lg">
      <span>
        <div className="text-lg">{props.item.name}</div>
        <img className="h-40 w-40" src={props.item.imageURL} />
      </span>
      <span>
        <QuantitySelector cart={props.cart} item={props.item} handleSetCart={props.handleSetCart} />
      </span>
      <span>
        <div className="itemPrice">${props.item.price}</div>
      </span>
      <span>
        <button
          type="button"
          id="removeFromCart"
          onClick={() => {
            const newCart = removeFromCart(props.cart, props.item)
            props.handleSetCart(newCart)
          }}
        >
          Remove
        </button>
      </span>
    </div>
  )
}

export default CartItem
