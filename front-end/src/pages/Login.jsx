import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import postLogin from '../api/postLogin';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Login() {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [error, setError] = useState(false);
  const [storedValue, setValue] = useLocalStorage('user');
  const navigate = useNavigate();

  const handleRedirect = (role) => {
    switch (role) {
    case 'administrator':
      navigate('/admin/manage');
      break;
    case 'seller':
      navigate('/seller/orders');
      break;
    case 'customer':
      console.log('CUSTOMER');
      navigate('/customer/products');
      break;

    default:
      break;
    }
  };

  const { mutate } = useMutation(postLogin, {
    onSuccess: ({ data }) => {
      setValue(data);
      handleRedirect(data.role);
    },
    onError: () => {
      setError(true);
      console.warn(storedValue);
    },
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLogin((prevState) => ({ ...prevState, [name]: value }));
  };

  const inputvalidator = () => {
    const { email, password } = login;
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const MAX_LENGTH_PASSWORD = 5;
    return regex.test(email) && password.length > MAX_LENGTH_PASSWORD;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(login);
  };

  return (
    <section>
      <form onSubmit={ (e) => handleSubmit(e) }>
        <label htmlFor="email">
          Login
          <input
            type="email"
            name="email"
            id="email"
            data-testid="common_login__input-email"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            id="password"
            data-testid="common_login__input-password"
            onChange={ handleChange }
          />
        </label>
        <button
          type="submit"
          data-testid="common_login__button-login"
          disabled={ !inputvalidator() }
        >
          LOGIN
        </button>
        <Link to="/register">
          <button
            type="button"
            data-testid="common_login__button-register"
          >
            Ainda não tenho conta
          </button>
        </Link>
        { error && (
          <div data-testid="common_login__element-invalid-email">
            Invalid Email
          </div>
        )}
      </form>
    </section>
  );
}
