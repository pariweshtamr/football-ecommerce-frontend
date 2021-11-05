import {
  requestPending,
  responseSuccess,
  requestFail,
  loginSuccess,
  loginFail,
  loginAuto,
  logoutSuccess,
} from './userSlice'
import { createUser, verifyNewUser, loginUser } from '../../api/userAPI'

export const userRegister = (newUser) => async (dispatch) => {
  console.log(newUser)
  dispatch(requestPending())

  // call api
  const result = await createUser(newUser)
  result?.status === 'success'
    ? dispatch(responseSuccess(result))
    : dispatch(requestFail(result))
  // dispatch response
}

export const userEmailVerification = (userObj) => async (dispatch) => {
  dispatch(requestPending())

  // call api
  const result = await verifyNewUser(userObj)
  console.log(result, 'from verifyUser action')
  result?.status === 'success'
    ? dispatch(responseSuccess(result))
    : dispatch(requestFail(result))
  // dispatch response
}

const setJWTinBrowserMemory = ({ accessJWT, refreshJWT }) => {
  window.sessionStorage.setItem('accessJWT', accessJWT)
  window.localStorage.setItem('refreshJWT', refreshJWT)
}

export const userLogin = (loginInfo) => async (dispatch) => {
  dispatch(requestPending())

  // CALL API TO LOGIN
  const result = await loginUser(loginInfo)
  console.log(result)
  if (result?.status === 'success') {
    setJWTinBrowserMemory(result.jwts)
    return dispatch(loginSuccess(result.user))
  }

  dispatch(loginFail(result))
}

export const autoLogin = () => async (dispatch) => {
  dispatch(loginAuto())
}

export const userLogout = () => (dispatch) => {
  window.sessionStorage.removeItem('accessJWT')
  window.localStorage.removeItem('refreshJWT')

  dispatch(logoutSuccess())
}
