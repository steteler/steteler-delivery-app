import React from 'react';
import PropTypes from 'prop-types';
import TableFinalizaOrder from './TableFinalizaOrder';

export default function FinalizeOrder({ listItens }) {
  return (
    <section>
      <h1>Finalizar Pedido</h1>
      <section>
        <TableFinalizaOrder listItens={ listItens } />
        {' '}
        {/* Tem que enviar por props os itens que estão nesse carrinho de compras */}
      </section>
      <div data-testid="customer_checkout__element-order-total-price">
        Total: R$
      </div>
    </section>
  );
}

FinalizeOrder.propTypes = {
  listItens: PropTypes.shape({
    item: PropTypes.number,
    descricao: PropTypes.string,
    quantidade: PropTypes.number,
    valorUnit: PropTypes.number,
  }).isRequired,
};
