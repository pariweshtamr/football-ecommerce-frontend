import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isPending: false,
  categoryResponse: {},
  categories: [],
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    respondPending: (state) => {
      state.isPending = true
    },
    getCategoriesSuccess: (state, { payload = [] }) => {
      state.isPending = false
      state.categories = payload
    },
    respondFail: (state, { payload }) => {
      state.isPending = false
      state.categoryResponse = payload
    },
  },
})

const { reducer, actions } = categorySlice
export const { respondPending, respondFail, getCategoriesSuccess } = actions

export default reducer
