import React from 'react';
import PropTypes from 'prop-types';
import SellerOrderCard from './SellerOrderCard';

export default function SellerOrdersCard({ orders }) {
  const mapItens = orders.map((it, i) => (
    <SellerOrderCard key={ i } iten={ it } />
  ));
  return (
    <section>
      { mapItens }
    </section>
  );
}
SellerOrdersCard.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    total_price: PropTypes.number,
    delivery_address: PropTypes.string,
    delivery_number: PropTypes.string,
    sale_date: PropTypes.instanceOf(Date),
    status: PropTypes.string,
  })).isRequired,
};
