import React, { useContext } from 'react';
import DeliveryContext from '../../context/DeliveryContext';

export default function DetailsAndAddress() {
  const { detailsAddress, setTotalDetailsAddress } = useContext(DeliveryContext);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setTotalDetailsAddress((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <section>
      <h1>Detalhes e Endereço para Entrega</h1>
      <form>
        <label htmlFor="seller">
          P.Vendedora Responsável:
          <select
            name="seller"
            id="seller"
            value={ detailsAddress.seller }
            data-testid="customer_checkout__select-seller"
            onChange={ (event) => handleChange(event) }
          >
            <option value="test1">test1</option>
            <option value="test2">test2</option>
          </select>
        </label>
        <label htmlFor="address">
          Endereço:
          <input
            type="text"
            name="address"
            id="address"
            data-testid="customer_checkout__input-address"
            value={ detailsAddress.address }
            onChange={ (event) => handleChange(event) }
          />
        </label>
        <label htmlFor="number">
          Número:
          <input
            type="text"
            name="number"
            id="number"
            data-testid="customer_checkout__input-address-number"
            value={ detailsAddress.number }
            onChange={ (event) => handleChange(event) }
          />
        </label>
      </form>
    </section>
  );
}
