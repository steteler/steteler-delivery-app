import React, { useContext } from 'react';
import { redirect } from 'react-router-dom';
import DetailsAndAddress from '../components/checkout/DetailsAndAddress';
import FinalizeOrder from '../components/checkout/FinalizeOrder';
import DeliveryContext from '../context/DeliveryContext';
import useLocalStorage from '../hooks/useLocalStorage';
import postSeller from '../api/postSeller';

export default function Checkout() {
  const { totalProductsInCart, setTotalProductsInCart } = useContext(DeliveryContext);
  const { detailsAddress } = useContext(DeliveryContext);
  const [storedValue] = useLocalStorage('user');
  // const history = useHistory();

  const total = totalProductsInCart.map((i) => i.totalIten)
    .reduce((acc, currValue) => acc + Number(currValue), 0);

  const idsProducts = Object.values(totalProductsInCart).map((i) => i.id);
  const quantsProducts = Object.values(totalProductsInCart).map((i) => i.quantity);

  const objForBackend = () => {
    const sale = {
      token: storedValue.token,
      email: storedValue.email,
      seller: detailsAddress.seller,
      address: detailsAddress.address,
      number: detailsAddress.number,
      total,
      productsIds: idsProducts,
      quantity: quantsProducts,
    };
    return sale;
  };

  const finalizeOrder = async () => {
    objForBackend();
    const idSeller = await postSeller();
    console.log(idSeller);
    setTotalProductsInCart([]);
    redirect(`/customer/orders/${idSeller.data.insertedId}`);
  };

  return (
    <section>
      <FinalizeOrder listItens={ totalProductsInCart } />
      <DetailsAndAddress />
      <button
        type="button"
        onClick={ () => finalizeOrder() }
        data-testid="customer_checkout__button-submit-order"
      >
        FINALIZAR PEDIDO
      </button>
    </section>
  );
}
