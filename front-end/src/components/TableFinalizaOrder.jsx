import React from 'react';

export default function TableFinalizaOrder() {
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
