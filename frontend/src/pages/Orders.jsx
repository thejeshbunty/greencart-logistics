import React, { useEffect, useState } from 'react';
import OrderCard from '../components/OrderCard.jsx';
import api from '../services/api.js';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await api.get('/orders');
        setOrders(res.data);
      } catch (err) {
        console.error('Error fetching orders', err);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="page-container">
      <h1>Orders</h1>
      <div className="card-grid">
        {orders.map(order => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
