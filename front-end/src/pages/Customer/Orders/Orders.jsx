import React from 'react';
import OrderCard from '../../../components/OrderItem';

// Após verificar de onde vem os dados e como eles chegarão, fazer um map pra renderizar todos

export default function Orders() {
  return (
    <div>
      <h1>Orders</h1>
      <OrderCard />
    </div>
  );
}
