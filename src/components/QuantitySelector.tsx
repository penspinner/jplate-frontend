import React, { useRef } from 'react'
import { removeFromCart, itemQuantityChange } from '../utils/utilsFunctions'

const QuantitySelector = (props: any) => {
  const selectorRef = useRef(null)
  const currentQuantity = props.item.userSelectedQuantity
  const validQuantityRange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  const handleSelect = () => {
    const selectedQuantity = selectorRef.current.selectedIndex
    if (selectedQuantity === 0) {
      const newCart = removeFromCart(props.cart, props.item)
      props.handleSetCart(newCart)
    }
    const newCart = itemQuantityChange(props.cart, props.item, selectedQuantity)
    props.handleSetCart(newCart)
  }

  return (
    <div className="flex justify-around pt-1">
      <div className="text-md">Quantity: </div>
      <select
        name="quantitySelector"
        ref={selectorRef}
        onChange={handleSelect}
        defaultValue={currentQuantity}
        className="ml-2 p-1 bg-teal-200 hover:bg-teal-400 rounded"
      >
        {validQuantityRange.map((num) => {
          return (
            <option key={Math.random()} value={num}>
              {num}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default QuantitySelector
