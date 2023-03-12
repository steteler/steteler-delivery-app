import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Products from '../pages/Customer/Products/Products';
import Checkout from '../pages/Checkout';
import Management from '../pages/Admin/Management';
import Orders from '../pages/Seller/Orders';
import OrderDetails from '../pages/Seller/OrderDetails';
import OrdersDetails from '../pages/Orders/OrdersDetails';
import CustomerOrders from '../pages/Customer/Orders/CustomerOrders';

export default function Routing() {
  return (
    <Routes>
      {/* //*MAIN */}
      <Route path="*" element={ <Navigate to="login" replace /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />

      {/* //*CUSTOMER */}
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/customer/orders" element={ <CustomerOrders /> } />
      <Route path="/customer/orders/:id" element={ <OrdersDetails /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />

      {/* //*SELLER */}
      <Route path="/seller/orders" element={ <Orders /> } />
      <Route path="/seller/orders/:id" element={ <OrderDetails /> } />

      {/* //*ADMIN */}
      <Route path="/admin/manage" element={ <Management /> } />
    </Routes>
  );
}
