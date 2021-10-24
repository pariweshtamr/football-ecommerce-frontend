import React, { useState } from 'react'
import {
  RegisterButton,
  RegisterContainer,
  RegisterForm,
  RegisterInput,
  RegisterTitle,
  RegisterWrapper,
  LoginOption,
  LoginButton,
} from '../PageStyles/RegisterStyles'
import { Link } from 'react-router-dom'
import { Alert, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from './userAction'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
}

const Register = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState(initialState)
  const [passwordError, setPasswordError] = useState('')

  const { isPending, userRegisterResponse } = useSelector((state) => state.user)

  const handleOnSubmit = (e) => {
    e.preventDefault()

    // Check for password confirmation
    const { password, confirmPassword } = user

    if (password !== confirmPassword) {
      setPasswordError('Password did not match!')
      return
    }
    //
    dispatch(userRegister(user))
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target

    //reset error message
    passwordError && name === 'confirmPassword' && setPasswordError('')

    setUser({
      ...user,
      [name]: value,
    })
  }

  return (
    <RegisterContainer>
      <RegisterWrapper>
        <RegisterTitle>CREATE AN ACCOUNT</RegisterTitle>
        <hr />
        {isPending && <Spinner variant="primary" animation="border" />}
        {userRegisterResponse.message && (
          <Alert
            variant={
              userRegisterResponse.status === 'success' ? 'success' : 'danger'
            }
          >
            {userRegisterResponse.message}
          </Alert>
        )}
        {passwordError && <Alert variant="danger">{passwordError}</Alert>}

        <RegisterForm onSubmit={handleOnSubmit}>
          <RegisterInput
            name="firstName"
            onChange={handleOnChange}
            placeholder="First Name *"
            required
          />
          <RegisterInput
            name="lastName"
            onChange={handleOnChange}
            placeholder="Last Name *"
            required
          />
          <RegisterInput
            name="email"
            onChange={handleOnChange}
            placeholder="Email *"
            required
          />
          <RegisterInput
            name="username"
            onChange={handleOnChange}
            placeholder="Username *"
            required
          />
          <RegisterInput
            name="password"
            onChange={handleOnChange}
            type="password"
            minLength="8"
            placeholder="Password *"
            required
          />
          <RegisterInput
            name="confirmPassword"
            onChange={handleOnChange}
            type="password"
            placeholder="Confirm Password *"
            required
          />
          <RegisterButton type="submit">REGISTER</RegisterButton>
        </RegisterForm>
        <LoginOption>Already have an account?</LoginOption>
        <Link to="/login">
          <LoginButton>LOGIN</LoginButton>
        </Link>
      </RegisterWrapper>
    </RegisterContainer>
  )
}

export default Register
