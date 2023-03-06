import React from 'react';

export default function OrderCard() {
  return (
    <section>
      <div data-testid={ `customer_orders__element-order-id-${id}` }>
        <div>
          Pedido
        </div>
        <div>
          001

        </div>
      </div>
      <div
        data-testid={ `customer_orders__element-delivery-status-${id}` }
      >
        STATUS
      </div>
      <div>
        <div
          data-testid={ `customer_orders__element-order-date-${id}` }
        >
          DATA
        </div>
        <div
          data-testid={ `customer_orders__element-card-price-${id}` }
        >
          VALOR
        </div>
      </div>
    </section>
  );
}
