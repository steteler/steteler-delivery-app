import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

export default function Register() {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setRegister((prevState) => ({ ...prevState, [name]: value }));
  };
  const inputValidator = () => {
    const { name, email, password } = register;
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+.[A-Z]{2,}$/gim;
    const MIN_NAME = 12;
    const MIN_PASSWD = 5;
    return regex.test(email) && name.length > MIN_NAME && password.length > MIN_PASSWD;
  };

  const btnHandler = () => {
    if (!inputValidator()) setError(true);
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Cadastro
      </Typography>
      <Box
        component="form"
        sx={ { height: '50vh', marginTop: '10vh' } }
      >
        <Stack spacing={ 2 } direction="column">
          <TextField
            label="Seu nome"
            id="input_name"
            name="name"
            required
            inputProps={ { 'data-testid': 'common_register__input-name' } }
            onChange={ handleChange }
          />
          <TextField
            label="Seu email"
            id="input_email"
            name="email"
            required
            inputProps={ { 'data-testid': 'common_register__input-email' } }
            onChange={ handleChange }
          />
          <TextField
            label="Senha"
            id="input_password"
            type="password"
            name="password"
            required
            inputProps={ { 'data-testid': 'common_register__input-password' } }
            onChange={ handleChange }
          />
          <Button
            variant="contained"
            type="button"
            onClick={ btnHandler }
            inputProps={ { 'data-testid': 'common_register__button-register' } }
          >
            Cadastrar
          </Button>
          <Alert
            severity="error"
            sx={ { display: !error ? 'none' : 'block' } }
            inputProps={
              { 'data-testid': 'common_register__element-invalid_register' }
            }
          >
            This is an error alert — check it out!
          </Alert>
        </Stack>
      </Box>
    </Container>
  );
}
