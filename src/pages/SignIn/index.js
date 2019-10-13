import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Input} from '@rocketseat/unform';
import * as Yup from 'yup';

import {signInRequest} from '~/store/modules/auth/actions';

const Schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válida')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória')
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({email, password}) {
    
   dispatch(signInRequest(email, password));
  }

  return (
   <>
      <img src={'https://skylab.rocketseat.com.br/api/files/1563202724073.svg'} alt="Gobarber" />

      <Form  schema={Schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha secreta"/>

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>

   </>
  );
}
