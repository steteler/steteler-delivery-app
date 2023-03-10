import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Products from '../pages/Customer/Products/Products';

import Orders from '../pages/Customer/Orders/Orders';
// import OrdersDetails from '../pages/Customer/Orders/OrdersDetails';

import Checkout from '../pages/Checkout';
import Management from '../pages/Admin/Management';
import OrdersDetails from '../pages/Orders/OrdersDetails';

export default function Routing() {
  return (
    <Routes>
      <Route path="*" element={ <Navigate to="login" replace /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/customer/orders" element={ <Orders /> } />

      <Route path="/customer/checkout" element={ <Checkout /> } />

      <Route path="/customer/orders/:id" element={ <OrdersDetails /> } />
      <Route path="/admin/manage" element={ <Management /> } />
    </Routes>
  );
}
