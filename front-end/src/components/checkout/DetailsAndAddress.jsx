import React, { useContext, useState, useEffect } from 'react';
import getUser from '../../api/getUser';
import DeliveryContext from '../../context/DeliveryContext';

export default function DetailsAndAddress() {
  const { detailsAddress, setTotalDetailsAddress } = useContext(DeliveryContext);
  const [users, setUsers] = useState([]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setTotalDetailsAddress((prevState) => ({ ...prevState, [name]: value }));
  };

  const getAllUsers = async () => {
    const allUsers = await getUser();
    return setUsers(allUsers.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

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
            { users.filter((u) => u.role === 'seller').map((s, i) => (
              <option value={ s.name } key={ i }>
                { s.name }
              </option>
            ))}
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
