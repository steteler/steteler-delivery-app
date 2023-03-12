import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SellerOrderCard({ iten }) {
  return (
    <div key={ iten.id }>
      <Link to={ `/seller/orders/${iten.id}` }>
        <div data-testid={ `seller_orders__element-order-id-${iten.id}` }>
          { iten.id }
        </div>
        <div data-testid={ `seller_orders_element-delivery-status-${iten.id}` }>
          { iten.status }
        </div>
        <div data-testid={ `seller_orders__element-order-date-${iten.id}` }>
          { iten.saleDate }
        </div>
        <div data-testid={ `seller_orders__element-card-price-${iten.id}` }>
          {`R$ ${iten.totalPrice.replace('.', ',')}` }
        </div>
        <div data-testid={ `seller_orders__element-card-address-${iten.id}` }>
          { iten.deliveryAddress }
          ,
          {' '}
          { iten.deliveryNumber }
        </div>
      </Link>
    </div>
  );
}

SellerOrderCard.propTypes = {
  iten: PropTypes.shape({
    id: PropTypes.number,
    totalPrice: PropTypes.string,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
    saleDate: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};
