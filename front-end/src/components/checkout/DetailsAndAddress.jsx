import React from 'react';

export default function DetailsAndAddress() {
  return (
    <section>
      <h1>Detalhes e Endereço para Entrega</h1>
      <form>
        <label htmlFor="winner">
          P.Vendedora Responsável:
          <select
            name="cardWinner"
            id="winner"
            data-testid="customer_checkout__select-seller"
          >
            <option value="test">test</option>
          </select>
        </label>
        <label htmlFor="address">
          Endereço:
          <input
            type="text"
            name="address"
            id="address"
            data-testid="customer_checkout__input-address"
            // value={ address }
            // onChange={ onInputChange }
          />
        </label>
        <label htmlFor="number">
          Número:
          <input
            type="text"
            name="number"
            id="number"
            data-testid="customer_checkout__input-address-number"
            // value={ number }
            // onChange={ onInputChange }
          />
        </label>
      </form>
    </section>
  );
}
