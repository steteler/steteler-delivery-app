import React from 'react';

export default function CustomerNavOptions() {
  return (
    <div className="options">
      <h3 data-testid="customer_products__element-navbar-link-products">
        PRODUTOS
      </h3>
      <h3 data-testid="customer_products__element-navbar-link-orders">
        MEUS PEDIDOS
      </h3>
    </div>
  );
}
