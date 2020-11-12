import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/global';
import { Title } from './styles';
import Form from '../Form';
import * as exampleActions from '../../store/modules/example/action';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <>
      <Container>
        <Title>Login</Title>
        <Form />
        <button type="button" onClick={handleClick}>
          Enviar
        </button>
      </Container>
    </>
  );
}
