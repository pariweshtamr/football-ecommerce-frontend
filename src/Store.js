import { configureStore } from '@reduxjs/toolkit'
import userReducer from './pages/User-auth-slice/userSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

export default store
