import React, { useState } from 'react'
import ItemDescription from './ItemDescription'

const Plate = (props: any) => {
  const [showItemDescription, setShowItemDescription] = useState(false)

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-xl flex flex-col">
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
        style={{ height: '22rem', width: '40rem' }}
        src={props.plate.imageURL}
        alt="Sunset in the mountains"
      ></img>
      <div className="px-4 py-2 bg-white">
        <div className="font-bold text-xl mb-2">{props.plate.name}</div>
        <p className="text-gray-700 text-base border-b pb-4 border-teal-500">
          {props.plate.description}
        </p>
        <span className="flex justify-around items-center text-lg">
          <a
            className="bg-teal-400 hover:bg-teal-600 rounded m-2"
            type="button"
            onClick={() => {
              return setShowItemDescription(!showItemDescription)
            }}
          >
            <img
              id="cartButton"
              className="h-16 pr-2 pl-1 pt-1 pb-1"
              src="https://image.flaticon.com/icons/svg/25/25619.svg"
            />
          </a>
          Price: {`$${props.plate.price}`}
        </span>
      </div>
    </div>
  )
}

export default Plate
