import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Routes, Route, Redirect } from 'react-router-dom';
import Register from '../pages/Register';

export default function Routing() {
  return (
    <Routes>
      {/* <Route path="/" />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" element={ <Login /> } /> */}
      <Route path="/register" element={ <Register /> } />
    </Routes>
  );
}
