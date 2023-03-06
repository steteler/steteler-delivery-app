import React from 'react';
import DetailsAndAddress from '../components/DetailsAndAddress';
import FinalizeOrder from '../components/FinalizeOrder';

export default function Checkout() {
  return (
    <section>
      <FinalizeOrder />
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
