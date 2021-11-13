import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../data'

const initialState = {
  isPending: false,
  productResponse: {},
  products: [],
  selectedProduct: {},
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    respondPending: (state) => {
      state.isPending = true
    },
    getProductsSuccess: (state, { payload = [] }) => {
      state.isPending = false
      state.products = payload
    },
    getSingleProductsSuccess: (state, { payload = {} }) => {
      state.isPending = false
      state.selectedProduct = payload
    },
    respondFail: (state, { payload }) => {
      state.isPending = false
      state.productResponse = payload
    },
  },
})

const { reducer, actions } = productSlice
export const {
  respondPending,
  respondFail,
  getProductsSuccess,
  getSingleProductsSuccess,
} = actions

export default reducer
