import React from 'react';
import TableFinalizaOrder from './TableFinalizaOrder';

export default function FinalizaOrder() {
  return (
    <section>
      <h1>Finalizar Pedido</h1>
      <section>
        <TableFinalizaOrder />
        {' '}
        {/* Tem que enviar por props os itens que estão nesse carrinho de compras */}
      </section>
    </section>
  );
}
