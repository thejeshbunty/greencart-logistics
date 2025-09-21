import React from 'react';

const OrderCard = ({ order }) => {
  return (
    <div className="card">
      <h3>Order ID: {order.orderID}</h3>
      <p>Value: ₹{order.valueRs}</p>
      <p>Assigned Route: {order.assignedRoute}</p>
      <p>Delivery Time: {order.deliveryTimestamp}</p>
    </div>
  );
};

export default OrderCard;
