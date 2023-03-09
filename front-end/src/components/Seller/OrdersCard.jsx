import React from 'react';
import PropTypes from 'prop-types';
import CardOrders from './CardOrders';

export default function OrdersCard({ orders }) {
  const mapItens = orders.map((it, i) => (
    <CardOrders key={ i } iten={ it } />
  ));
  return (
    <section>
      { mapItens }
    </section>
  );
}
OrdersCard.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    total_price: PropTypes.number,
    delivery_address: PropTypes.string,
    delivery_number: PropTypes.string,
    sale_date: PropTypes.instanceOf(Date),
    status: PropTypes.string,
  })).isRequired,
};
