import React, { useContext } from 'react';
import DetailsAndAddress from '../components/checkout/DetailsAndAddress';
import FinalizeOrder from '../components/checkout/FinalizeOrder';
import DeliveryContext from '../context/DeliveryContext';

export default function Checkout() {
  const { totalProductsInCart } = useContext(DeliveryContext);
  return (
    <section>
      <FinalizeOrder listItens={ totalProductsInCart } />
      <DetailsAndAddress />
      <button
        type="button"
        // onClick={ () => this.btnDelete(id) }
        data-testid="customer_checkout__button-submit-order"
      >
        FINALIZAR PEDIDO
      </button>
    </section>
  );
}
