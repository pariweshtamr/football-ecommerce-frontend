import React, { useState, useEffect } from 'react'
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
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../User-auth-slice/userAction'
import { Alert, Spinner } from 'react-bootstrap'

const initialState = {
  username: 'pariwesh7',
  password: '12345678',
}

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { isLoggedIn, isPending, userLoginResponse } = useSelector(
    (state) => state.user,
  )

  const [loginInfo, setLoginInfo] = useState(initialState)

  useEffect(() => {
    isLoggedIn && history.push('/dashboard')
  }, [isLoggedIn])

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setLoginInfo({
      ...loginInfo,
      [name]: value,
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const { username, password } = loginInfo

    if (!username && !password) {
      return alert('You must provide both username and password')
    }
    dispatch(userLogin(loginInfo))
  }

  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginTitle>SIGN IN</LoginTitle>
        <hr />
        {isPending && <Spinner variant="primary" animation="border" />}
        {userLoginResponse?.message && (
          <Alert
            variant={
              userLoginResponse.status === 'success' ? 'success' : 'danger'
            }
          >
            {userLoginResponse.message}
          </Alert>
        )}
        <LoginForm onSubmit={handleOnSubmit}>
          <LoginInput
            name="username"
            placeholder="Username"
            required
            value={loginInfo.username}
            onChange={handleOnChange}
          />
          <LoginInput
            name="password"
            type="password"
            placeholder="Password"
            required
            value={loginInfo.password}
            onChange={handleOnChange}
          />
          <LoginButton type="submit">LOGIN</LoginButton>
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
