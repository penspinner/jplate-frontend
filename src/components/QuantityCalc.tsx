import React from 'react'
import { calculate } from '../utils/utilsFunctions'

const QuantityCalc = (props: { quantity: any; onChange: any }) => {
  let amount = props.quantity
  let setAmount = props.onChange

  return (
    <div id="quantityCalc" className="flex">
      <div className="quantityBtn">
        <button
          id="minus"
          type="button"
          className="rounded hover:bg-teal-200 h-8 w-8 "
          onClick={() => {
            setAmount(calculate(amount, 'minus'))
          }}
        >
          -
        </button>
        <span className="inline-block border w-8 pl-3">{amount}</span>
        <button
          id="add"
          type="button"
          className="rounded hover:bg-teal-200 h-8 w-8"
          onClick={() => {
            setAmount(calculate(amount, 'add'))
          }}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default QuantityCalc
