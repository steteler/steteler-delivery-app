import PropTypes from 'prop-types';

export default function CardOrders({ iten }) {
  return (
    <div key={ iten.id }>
      <div data-testid={ `seller_orders__element-order-id-${iten.id}` }>
        { iten.id }
      </div>
      <div data-testid={ `seller_orders_element-delivery-status-${iten.id}` }>
        { iten.status }
      </div>
      <div data-testid={ `seller_orders__element-order-date-${iten.id}` }>
        { iten.sale_date }
      </div>
      <div data-testid={ `seller_orders__element-card-price-${iten.id}` }>
        { iten.total_price }
      </div>
      <div data-testid={ `seller_orders__element-card-address-${iten.id}` }>
        { iten.delivery_address }
        ,
        {' '}
        { iten.delivery_number }
      </div>
    </div>
  );
}

CardOrders.propTypes = {
  iten: PropTypes.shape({
    id: PropTypes.number,
    total_price: PropTypes.number,
    delivery_address: PropTypes.string,
    delivery_number: PropTypes.string,
    sale_date: PropTypes.instanceOf(Date),
    status: PropTypes.string,
  }).isRequired,
};
