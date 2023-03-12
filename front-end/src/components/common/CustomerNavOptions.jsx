import React from 'react';
import { Link } from 'react-router-dom';

export default function CustomerNavOptions() {
  return (
    <div className="options">
      <h3 data-testid="customer_products__element-navbar-link-products">
        PRODUTOS
      </h3>
      <Link to="/customer/orders">
        <h3 data-testid="customer_products__element-navbar-link-orders">
          MEUS PEDIDOS
        </h3>
      </Link>
    </div>
  );
}
