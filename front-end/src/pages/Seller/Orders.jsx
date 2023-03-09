import React, { useState, useEffect } from 'react';
import getOrders from '../../api/Seller/getOrders';
import OrdersCard from '../../components/Seller/OrdersCard';
// import Navbar from '../../components/common/Navbar/Navbar';

export default function Orders() {
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
      <OrdersCard orders={ orders } />
    </div>
  );
}
