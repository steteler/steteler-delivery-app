import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TableFinalizaOrder from './TableFinalizaOrder';
import DeliveryContext from '../../context/DeliveryContext';

export default function FinalizeOrder({ listItens }) {
  const { totalProductsInCart, setTotalProductsInCart } = useContext(DeliveryContext);

  const total = totalProductsInCart.map((i) => i.totalIten)
    .reduce((acc, currValue) => acc + Number(currValue), 0);

  const remove = (id) => {
    // console.log('pain');
    const filterProd = totalProductsInCart.filter((i) => i.id !== id);
    // console.log(filterProd);
    setTotalProductsInCart(filterProd);
  };

  return (
    <section>
      <h1>Finalizar Pedido</h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Subtotal</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          <TableFinalizaOrder listItens={ listItens } remove={ remove } />
        </tbody>
      </table>
      <div data-testid="customer_checkout__element-order-total-price">
        { `Total: R$ ${total.toFixed(2).toString().replace('.', ',')}` }
      </div>
    </section>
  );
}

FinalizeOrder.propTypes = {
  listItens: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    url_image: PropTypes.string,
    quantity: PropTypes.number,
    totalIten: PropTypes.string,
  })).isRequired,
};
