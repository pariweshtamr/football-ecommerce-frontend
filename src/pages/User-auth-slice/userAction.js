import {
  requestPending,
  responseSuccess,
  requestFail,
  loginSuccess,
  loginFail,
  loginAuto,
  logoutSuccess,
  autoLoginPending,
} from './userSlice'
import {
  createUser,
  verifyNewUser,
  loginUser,
  logoutUser,
} from '../../api/userAPI'
import { getNewAccessJWT } from '../../api/tokenAPI'

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
  if (result?.status === 'success') {
    setJWTinBrowserMemory(result.jwts)
    return dispatch(loginSuccess(result.user))
  }

  dispatch(loginFail(result))
}

export const autoLogin = () => async (dispatch) => {
  dispatch(autoLoginPending(true))
  const accessJWT = window.sessionStorage.getItem('accessJWT')
  const refreshJWT = window.localStorage.getItem('refreshJWT')

  //1. accessJWT EXISTS
  if (accessJWT) {
    return dispatch(loginAuto())
  }

  //2. accessJWT does not exist but refreshJWT exists
  if (!accessJWT && refreshJWT) {
    // CALL API to get refreshJWT
    const result = await getNewAccessJWT()
    if (result?.accessJWT) {
      window.sessionStorage.setItem('accessJWT', result.accessJWT)
      return dispatch(loginAuto())
    }

    dispatch(userLogout())
  }
}

export const userLogout = () => async (dispatch) => {
  const accessJWT = window.sessionStorage.getItem('accessJWT')
  const refreshJWT = window.localStorage.getItem('refreshJWT')

  await logoutUser({ accessJWT, refreshJWT })

  window.sessionStorage.removeItem('accessJWT')
  window.localStorage.removeItem('refreshJWT')

  dispatch(logoutSuccess())
}
