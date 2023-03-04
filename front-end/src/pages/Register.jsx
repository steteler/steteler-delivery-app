import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import registerUser from '../api/registerUser';

export default function Register() {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const { mutate } = useMutation(registerUser, {
    onSuccess: (data) => {
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/customer/products');
    },
    onError: () => {
      // An error happened!
      setError(true);
      console.log(error);
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

  const btnHandler = () => {
    mutate(register);
    // if (!error) {
    //   console.log('ERRO');
    //   navigate('/customer/products');
    // }
  };

  return (
    <section>
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
        type="button"
        onClick={ btnHandler }
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
    </section>
  );
}
