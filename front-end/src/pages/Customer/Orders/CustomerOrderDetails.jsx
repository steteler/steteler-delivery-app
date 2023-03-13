import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../../components/common/Navbar/Navbar';

export default function CustomerOrderDetails() {
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <h1>OrdersDetails</h1>
      <h2>
        { id }
        {' '}
      </h2>
    </div>
  );
}
