import React, { useState, useEffect } from 'react';
import getOrders from '../../api/Seller/getOrders';
import SellerOrdersCard from '../../components/Seller/SellerOrdersCard';
// import Navbar from '../../components/common/Navbar/Navbar';

export default function SellerOrders() {
  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    const allOrders = await getOrders();
    console.log(allOrders.data);
    return setOrders(allOrders.data);
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <SellerOrdersCard orders={ orders } />
      <h1>Página do vendedor</h1>
      <button type="button" onClick={ () => getAllOrders() }>clique</button>
      <button type="button" onClick={ () => console.log(orders) }>orders</button>
      {/* <OrdersCard orders={ orders } /> */}
    </div>
  );
}
