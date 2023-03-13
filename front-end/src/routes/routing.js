import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
//* Customer
import Products from '../pages/Customer/Products/Products';
import CustomerOrders from '../pages/Customer/Orders/CustomerOrders';
import CustomerOrderDetails from '../pages/Customer/Orders/CustomerOrderDetails';
import Checkout from '../pages/Customer/Checkout';
//* Seller
import SellerOrders from '../pages/Seller/SellerOrders';
import SellerOrderDetails from '../pages/Seller/SellerOrderDetails';
//* Admin
import Management from '../pages/Admin/Management';

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
      <Route path="/customer/orders/:id" element={ <CustomerOrderDetails /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />

      {/* //*SELLER */}
      <Route path="/seller/orders" element={ <SellerOrders /> } />
      <Route path="/seller/orders/:id" element={ <SellerOrderDetails /> } />

      {/* //*ADMIN */}
      <Route path="/admin/manage" element={ <Management /> } />
    </Routes>
  );
}
