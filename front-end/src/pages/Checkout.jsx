import React from 'react';
import DetailsAndAddress from '../components/DetailsAndAddress';
import FinalizeOrder from '../components/FinalizeOrder';

export default function Checkout() {
  return (
    <section>
      <FinalizeOrder />
      <DetailsAndAddress />
    </section>
  );
}
