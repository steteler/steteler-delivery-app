import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from '../pages/Register';

export default function Routing() {
  return (
    <Routes>
      {/* <Route path="/" element={ <Login /> } />
      <Route path="/login" element={ <Login /> } /> */}
      <Route path="/register" element={ <Register /> } />
    </Routes>
  );
}
