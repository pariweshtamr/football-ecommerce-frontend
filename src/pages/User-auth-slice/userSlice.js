import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: {},
  isLoggedIn: false,
  isPending: false,
  userRegisterResponse: {},
  userLoginResponse: {},
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isPending = true
    },

    responseSuccess: (state, { payload }) => {
      state.isPending = false
      state.userRegisterResponse = payload || {}
    },

    requestFail: (state, { payload }) => {
      state.isPending = false
      state.userRegisterResponse = payload || {}
    },

    loginSuccess: (state, { payload }) => {
      state.userInfo = payload || {}
      state.userLoginResponse = {}
      state.isLoggedIn = true
      state.isPending = false
    },

    loginFail: (state, { payload }) => {
      state.isPending = false
      state.userLoginResponse = payload || {}
    },
  },
})

const { reducer, actions } = userSlice

export const {
  requestPending,
  responseSuccess,
  requestFail,
  loginSuccess,
  loginFail,
} = actions

export default reducer
