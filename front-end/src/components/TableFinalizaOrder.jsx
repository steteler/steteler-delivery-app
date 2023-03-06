import React from 'react';
import PropTypes from 'prop-types';

/* Nos datatestids do tbody é pra usar index e não id, verificar */

export default function TableFinalizaOrder({ listItens }) {
  const tbody = listItens.map((item) => {
    const { id, descricao, quantidade, valorUnit } = item;
    return (
      <tr key={ id }>
        <td
          data-testid={ `customer_checkout__element-order-table-item-number-${id}` }
        >
          {id}
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-name-${id}` }
        >
          {descricao}
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-quantity-${id}` }
        >
          {quantidade}

        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-unit-price-${id}` }
        >
          {valorUnit}
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-sub-total-${id}` }
        >
          { /* Subtotal */ }
        </td>
        <td>
          <button
            type="button"
            // onClick={ () => this.btnDelete(id) }
            data-testid={ `customer_checkout__element-order-table-remove-${id}` }
          >
            Remover
          </button>
        </td>
      </tr>
    );
  });
  return (
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
      <tbody className="tbody">
        { tbody }
      </tbody>
    </table>
  );
}

TableFinalizaOrder.propTypes = {
  listItens: PropTypes.shape({
    item: PropTypes.number,
    descricao: PropTypes.string,
    quantidade: PropTypes.number,
    valorUnit: PropTypes.number,
  }).isRequired,
};
