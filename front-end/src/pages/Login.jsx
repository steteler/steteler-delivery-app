import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MAX_LENGTH_PASSWORD = 5;
export default function Login() {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLogin((prevState) => ({ ...prevState, [name]: value }));
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let isEmailValid = false;
    if (login.email.match(regex)) {
      isEmailValid = true;
    } else {
      isEmailValid = false;
    }
    if (login.password.length >= MAX_LENGTH_PASSWORD && isEmailValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <section>
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
        type="button"
        data-testid="common_login__button-login"
        disabled={ isDisabled }
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
      <div
        data-testid="common_login__element-invalid-email"
      >
        Invalid Email
      </div>
    </section>
  );
}
