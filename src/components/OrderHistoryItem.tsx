import React from 'react'

const OrderHistoryItem = (props: {
  order: { items: any[]; createdAt: string | number | Date; total: React.ReactNode }
}) => {
  let total = 0
  props.order.items.map((item: { userSelectedQuantity: number }) => {
    total += item.userSelectedQuantity
  })

  const firstItemImage = props.order.items[0].imageURL

  return (
    <div className="orderHistoryItem">
      <div className="pastOrderSubHeader">
        <label>Date: {new Date(props.order.createdAt).toDateString()}</label>
        <label>TotalItems: {total} </label>
        <label>Subtotal: {props.order.total}</label>
      </div>
      <img src={firstItemImage} className="cartImg" />
    </div>
  )
}

export default OrderHistoryItem
