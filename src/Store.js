import { configureStore } from '@reduxjs/toolkit'
import userReducer from './pages/User-auth-slice/userSlice'
import productReducer from './pages/Product/ProductSlice'
import categoryReducer from './components/Categories/CategorySlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    category: categoryReducer,
  },
})

export default store
