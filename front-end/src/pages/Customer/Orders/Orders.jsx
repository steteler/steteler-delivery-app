import React from 'react';
import { Link } from 'react-router-dom';
import OrderCard from '../../../components/OrderItem';

// Após verificar de onde vem os dados e como eles chegarão, fazer um map pra renderizar a lista

export default function Orders() {
  return (
    <div>
      <h1>Orders</h1>
      <Link to="/customer/orders/:id">
        <OrderCard />
      </Link>
    </div>
  );
}
