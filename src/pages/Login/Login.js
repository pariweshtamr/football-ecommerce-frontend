import React from 'react'
import {
  LoginButton,
  LoginContainer,
  Links,
  ExternalLink,
  Back,
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
          <Links>
            <ExternalLink>
              <Link>Forgot your passweord?</Link>
              <Link to="/register">Create a new account</Link>
            </ExternalLink>

            <Back>
              <Link to="/">Home</Link>
            </Back>
          </Links>
        </LoginForm>
      </LoginWrapper>
    </LoginContainer>
  )
}

export default Login
