import React from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../../hooks/useLocalStorage';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const [storedValue] = useLocalStorage('user');
  console.log(storedValue.name);

  const btnHandler = () => {
    localStorage.clear();
    navigate('/login');
  };
  return (
    <nav className="navbar">
      <h3 data-testid="customer_products__element-navbar-link-products">
        PRODUTOS
      </h3>
      <h3 data-testid="customer_products__element-navbar-link-orders">
        MEUS PEDIDOS
      </h3>
      <h2 data-testid="customer_products__element-navbar-user-full-name">
        {storedValue.name}
      </h2>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ btnHandler }
      >
        Sair
      </button>

    </nav>
  );
}
