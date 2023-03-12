import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function OrderCard({ order }) {
  return (
    <div key={ order.id } style={ { border: '1px solid tomato' } }>
      <Link to={ `/customer/orders/${order.id}` }>
        <div data-testid={ `customer_orders__element-order-id-${order.id}` }>
          { order.id }
        </div>
        <div data-testid={ `customer_orders__element-delivery-status-${order.id}` }>
          { order.status }
        </div>
        <div data-testid={ `customer_orders__element-order-date-${order.id}` }>
          { new Date(order.saleDate).toLocaleDateString('pt-br') }
        </div>
        <div data-testid={ `customer_orders__element-card-price-${order.id}` }>
          {`R$ ${order.totalPrice.replace('.', ',')}` }
        </div>
      </Link>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    totalPrice: PropTypes.string,
    saleDate: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};
