import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DetailsAndAddress from '../../components/checkout/DetailsAndAddress';
import FinalizeOrder from '../../components/checkout/FinalizeOrder';
import DeliveryContext from '../../context/DeliveryContext';
import useLocalStorage from '../../hooks/useLocalStorage';
import postSeller from '../../api/postSeller';

export default function Checkout() {
  const { totalProductsInCart, setTotalProductsInCart } = useContext(DeliveryContext);
  const { detailsAddress } = useContext(DeliveryContext);
  const [storedValue] = useLocalStorage('user');
  const navigate = useNavigate();

  const total = totalProductsInCart.map((i) => i.totalIten)
    .reduce((acc, currValue) => acc + Number(currValue), 0);

  const idsProducts = Object.values(totalProductsInCart).map((i) => i.id);
  const quantsProducts = Object.values(totalProductsInCart).map((i) => i.quantity);

  const objForBackend = () => {
    const sale = {
      email: storedValue.email,
      seller: 'Fulana Pereira',
      address: detailsAddress.address,
      number: detailsAddress.number,
      total,
      productsIds: idsProducts,
      quantity: quantsProducts,
    };
    return sale;
  };

  const finalizeOrder = async () => {
    const obj = objForBackend();
    const { data } = await postSeller(obj, storedValue.token);
    console.log(data.message);
    setTotalProductsInCart([]);
    navigate(`/customer/orders/${data.message}`);
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
