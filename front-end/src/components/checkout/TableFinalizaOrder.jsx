import React from 'react';
import PropTypes from 'prop-types';

export default function TableFinalizaOrder({ listItens, remove }) {
  const tbody = listItens.map((item, i) => {
    const { id, name, quantity, price, totalIten } = item;
    return (
      <tr key={ id }>
        <td
          data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
        >
          { i + 1 }
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-name-${i}` }
        >
          { name }
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
        >
          { quantity }

        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
        >
          { price.replace('.', ',') }
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
        >
          {totalIten.replace('.', ',')}
        </td>
        <td>
          <button
            type="button"
            data-testid={ `customer_checkout__element-order-table-remove-${i}` }
            onClick={ () => remove(id) }
          >
            Remover
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      { tbody }
    </div>
  );
}

TableFinalizaOrder.propTypes = {
  listItens: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    url_image: PropTypes.string,
    quantity: PropTypes.number,
    totalIten: PropTypes.string,
  })).isRequired,
  remove: PropTypes.func.isRequired,
};
