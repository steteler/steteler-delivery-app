import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import postRegister from '../api/postRegister';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Register() {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [storedValue, setValue] = useLocalStorage('user');
  console.log(storedValue);

  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const { mutate } = useMutation(postRegister, {
    onSuccess: ({ data }) => {
      setValue(data);
      navigate('/customer/products');
    },
    onError: () => {
      setError(true);
      console.warn(storedValue);
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
    mutate(register);
  };

  return (
    <section>
      <form onSubmit={ (e) => handleSubmit(e) }>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="input_name"
            required
            data-testid="common_register__input-name"
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
            data-testid="common_register__input-email"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            id="input_password"
            data-testid="common_register__input-password"
            onChange={ handleChange }
          />
        </label>
        <button
          type="submit"
          disabled={ !inputValidator() }
          data-testid="common_register__button-register"
        >
          CADASTRAR
        </button>
        { error && (
          <div data-testid="common_register__element-invalid_register">
            Usuário já existente
          </div>
        )}
      </form>
    </section>
  );
}
