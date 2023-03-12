import React from 'react';
import { useParams } from 'react-router-dom';

export default function CustomerOrderDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1>OrdersDetails</h1>
      <h2>
        { id }
        {' '}
      </h2>
    </div>
  );
}
