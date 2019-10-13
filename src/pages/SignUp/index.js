import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { signUpRequest } from '~/store/modules/auth/actions';
import {Form, Input} from '@rocketseat/unform';
import * as Yup from 'yup';

const Schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válida')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
  name: Yup.string().required('O nome é obrigatório')
});


export default function SignUp() {
  const dispatch = useDispatch()

  function handleSubmit({name, email, password}) {
    dispatch(signUpRequest(name, email, password));
  }
  
  return (
   <>
      <img src={'https://skylab.rocketseat.com.br/api/files/1563202724073.svg'} alt="Gobarber" />

      <Form schema={Schema} onSubmit={handleSubmit}>
        <Input  name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha secreta"/>

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho conta.</Link>
      </Form>

   </>
  );
}
