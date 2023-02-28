import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routing from './routes/routing';

function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
