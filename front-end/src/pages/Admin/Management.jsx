import React, { useState } from 'react';
import { useMutation } from 'react-query';
import useLocalStorage from '../../hooks/useLocalStorage';
import postAdminRegister from '../../api/postAdminRegister';
import Navbar from '../../components/common/Navbar/Navbar';

export default function Management() {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });
  const [error, setError] = useState(false);
  const [storedValue] = useLocalStorage('user');

  const { mutate } = useMutation(postAdminRegister, {
    onSuccess: ({ data }) => {
      setValue(data);
    },
    onError: () => {
      setError(true);
    },
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setRegister((prevState) => ({ ...prevState, [name]: value }));
  };

  const inputValidator = () => {
    const { name, email, password } = register;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const MIN_NAME = 11;
    const MIN_PASSWD = 5;
    return regex.test(email) && name.length > MIN_NAME && password.length > MIN_PASSWD;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { token } = storedValue;
    mutate({ register, token });
  };
  return (
    <section>
      <Navbar />
      { error && (
        <div data-testid="admin_manage__element-invalid-register">
          ERRO
        </div>
      )}
      <form onSubmit={ (e) => handleSubmit(e) }>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="input_name"
            required
            data-testid="admin_manage__input-name"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="input_email"
            required
            data-testid="admin_manage__input-email"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            id="input_password"
            data-testid="admin_manage__input-password"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="role-input">
          Tipo
          <select
            data-testid="admin_manage__select-role"
            name="role"
            id="role-input"
            onChange={ handleChange }
          >
            <option value="seller">Vendedor</option>
            <option value="administrator">Administrador</option>
            <option value="customer">Cliente</option>
          </select>
        </label>
        <button
          type="submit"
          disabled={ !inputValidator() }
          data-testid="admin_manage__button-register"
        >
          CADASTRAR
        </button>
      </form>
    </section>
  );
}
