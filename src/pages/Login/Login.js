import React from 'react'
import {
  LoginButton,
  LoginContainer,
  LoginForm,
  LoginInput,
  LoginTitle,
  LoginWrapper,
} from '../PageStyles/LoginStyles'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginTitle>SIGN IN</LoginTitle>
        <LoginForm>
          <LoginInput placeholder="Username" />
          <LoginInput placeholder="Password" />
          <LoginButton>LOGIN</LoginButton>
          <Link>Forgot your passweord?</Link>
          <Link to="/register">Create a new account</Link>
        </LoginForm>
      </LoginWrapper>
    </LoginContainer>
  )
}

export default Login
