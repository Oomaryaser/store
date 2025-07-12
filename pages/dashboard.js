import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('/api/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              {order.item} - {order.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
