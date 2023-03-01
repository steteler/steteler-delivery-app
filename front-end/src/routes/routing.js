import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Routes, Route, Redirect } from 'react-router-dom';
import Register from '../pages/Register';
import Products from '../pages/Customer/Products/Products';

export default function Routing() {
  return (
    <Routes>
      {/* <Route path="/" />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" element={ <Login /> } /> */}
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <Products /> } />
    </Routes>
  );
}
