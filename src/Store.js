import { configureStore } from '@reduxjs/toolkit'
import userReducer from './pages/User-auth-slice/userSlice'
import productReducer from './pages/Product/ProductSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
})

export default store
