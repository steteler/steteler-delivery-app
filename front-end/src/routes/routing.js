import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Products from '../pages/Customer/Products/Products';
import Management from '../pages/Admin/Management';

export default function Routing() {
  return (
    <Routes>
      <Route path="*" element={ <Navigate to="login" replace /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/admin/manage" element={ <Management /> } />
    </Routes>
  );
}
