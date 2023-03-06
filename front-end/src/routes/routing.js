import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Products from '../pages/Customer/Products/Products';
import Checkout from '../pages/Checkout';
import Management from '../pages/Admin/Management';
import Checkout from '../pages/Checkout';

export default function Routing() {
  return (
    <Routes>
      <Route path="*" element={ <Navigate to="login" replace /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/admin/manage" element={ <Management /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
    </Routes>
  );
}
