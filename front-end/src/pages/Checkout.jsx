import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DetailsAndAddress from '../components/checkout/DetailsAndAddress';
import FinalizeOrder from '../components/checkout/FinalizeOrder';
import DeliveryContext from '../context/DeliveryContext';

export default function Checkout() {
  const { totalProductsInCart, setTotalProductsInCart } = useContext(DeliveryContext);
  // const { detailsAddress, setTotalDetailsAddress } = useContext(DeliveryContext);

  // const objForBackend = () => {

  // };

  const finalizeOrder = () => {
    setTotalProductsInCart([]);
  };

  return (
    <section>
      <FinalizeOrder listItens={ totalProductsInCart } />
      <DetailsAndAddress />
      <Link to="/register">
        <button
          type="button"
          onClick={ finalizeOrder }
          data-testid="customer_checkout__button-submit-order"
        >
          FINALIZAR PEDIDO
        </button>
      </Link>
    </section>
  );
}
