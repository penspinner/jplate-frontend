import React, { useState } from 'react'
import QuantityCalc from './QuantityCalc'
import { addToCart } from '../utils/utilsFunctions'

const Plate = (props: any) => {
  const [showItemDescription, setShowItemDescription] = useState(false)
  const [amount, setAmount] = useState(1)

  function handleQuantityChange(num: any) {
    setAmount(num)
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-xl flex flex-col">
      <img
        style={{ height: '22rem', width: '40rem' }}
        src={props.plate.imageURL}
        alt="Sunset in the mountains"
      ></img>
      <div className="px-4 py-2 bg-white">
        <div className="font-bold text-xl mb-2">{props.plate.name}</div>
        <p className="text-gray-700 text-base border-b pb-4 border-teal-500">
          {props.plate.description}
        </p>
        <span className="flex justify-around items-center text-sm mt-2 mb-2">
          Price per unit: {`$${props.plate.price}`}
          <QuantityCalc quantity={amount} onChange={handleQuantityChange} />
          <a
            className="bg-teal-400 hover:bg-teal-600 rounded p-2"
            type="button"
            onClick={() => {
              const newCart = addToCart(props.cart, props.plate, amount)
              props.handleSetCart(newCart)
            }}
          >
            Add to cart
          </a>
        </span>
      </div>
    </div>
  )
}

export default Plate
