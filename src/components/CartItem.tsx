import React, { useState } from 'react'
import QuantitySelector from './QuantitySelector'
import { removeFromCart } from '../utils/utilsFunctions'

const CartItem = (props: {
  item: { name: React.ReactNode; price: React.ReactNode; imageURL: string }
  cart: any
  handleSetCart: (arg0: any) => void
}) => {
  return (
    <div className="flex flex-col">
      <div className="itemTitle">{props.item.name}</div>
      <QuantitySelector cart={props.cart} item={props.item} handleSetCart={props.handleSetCart} />
      <div className="itemPrice">${props.item.price}</div>
      <img className="h-40 w-40" src={props.item.imageURL} />

      <button
        type="button"
        id="removeFromCart"
        onClick={() => {
          const newCart = removeFromCart(props.cart, props.item)
          props.handleSetCart(newCart)
        }}
      >
        X
      </button>
    </div>
  )
}

export default CartItem
