import React, { useState, useEffect } from 'react';
import getOrders from '../../api/Seller/getOrders';
import Navbar from '../../components/common/Navbar/Navbar';
import SellerOrdersCard from '../../components/Seller/SellerOrdersCard';

export default function SellerOrders() {
  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    const allOrders = await getOrders();
    return setOrders(allOrders.data);
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <main>
      <Navbar />
      <SellerOrdersCard orders={ orders } />
    </main>
  );
}
