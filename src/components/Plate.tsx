import React, { useState } from 'react'
import ItemDescription from './ItemDescription'

const Plate = (props: any) => {
  const [showItemDescription, setShowItemDescription] = useState(false)

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col">
      {showItemDescription ? (
        <ItemDescription
          cart={props.cart}
          handleSetCart={props.handleSetCart}
          plate={props.plate}
          toggleItemDescription={setShowItemDescription}
          showItemDescription={showItemDescription}
        />
      ) : (
        ''
      )}
      <img
        style={{ height: 'auto', width: 'auto' }}
        className="w-full"
        src={props.plate.imageURL}
        alt="Sunset in the mountains"
      ></img>
      <br />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.plate.name}</div>
        <p className="text-gray-700 text-base">{props.plate.description}</p>
        <button
          type="button"
          onClick={() => {
            return setShowItemDescription(!showItemDescription)
          }}
        >
          <img
            id="cartButton"
            style={{ height: '5rem;' }}
            src="https://image.flaticon.com/icons/svg/25/25619.svg"
          />
        </button>
        {`$${props.plate.price}`}
      </div>
    </div>
  )
}

export default Plate
