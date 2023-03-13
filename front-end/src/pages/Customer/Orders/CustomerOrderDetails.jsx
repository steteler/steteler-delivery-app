import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
// import { format } from 'date-fns';
import Navbar from '../../../components/common/Navbar/Navbar';
import getSellerId from '../../../api/getSellerId';

export default function CustomerOrderDetails() {
  const { id } = useParams();

  const {
    isSuccess,
    data: details,
  } = useQuery('saleDetails', () => getSellerId(id));

  return (
    <section>
      <Navbar />
      <p>{ details.totalPrice }</p>
      <p>Detalhes do Pedido</p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        { `PEDIDO 000${id}` }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        P. Vend: Fulana Pereira
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { `Date ${details.saleDate}` }
      </p>
      <p
        data-testid={
          `customer_order_details__element-order-details-label-delivery-status${id}`
        }
      >
        { `Status ${details.status}` }
      </p>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
      >
        MARCAR COMO ENTREGUE
      </button>
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
          { isSuccess && details.Products.map((item, i) => {
            const { id: itemId, name, quantity, price, totalIten } = item;
            return (
              <tr key={ itemId }>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-item-number-${i}`
                  }
                >
                  { i + 1 }
                </td>
                <td
                  data-testid={ `customer_order_details__element-order-table-name-${i}` }
                >
                  { name }
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-quantity-${i}`
                  }
                >
                  { quantity }

                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-unit-price-${i}`
                  }
                >
                  { price.replace('.', ',') }
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-sub-total-${i}`
                  }
                >
                  {totalIten.replace('.', ',')}
                </td>
              </tr>
            );
          }) }
        </tbody>
      </table>
      <p>{ `Total: R$ ${details.totalPrice}` }</p>
    </section>
  );
}
