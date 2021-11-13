import {
  respondPending,
  respondFail,
  getProductsSuccess,
  getSingleProductsSuccess,
} from './ProductSlice'
import { getAProductById, getProducts } from '../../api/productAPI'

export const fetchProducts = () => async (dispatch) => {
  dispatch(respondPending())
  const data = await getProducts()
  try {
    dispatch(getProductsSuccess(data))
  } catch (error) {
    dispatch(respondFail(data))
  }
}

export const fetchAProductById = (_id) => async (dispatch) => {
  dispatch(respondPending())

  const data = await getAProductById(_id)

  if (data?._id) {
    dispatch(getSingleProductsSuccess(data))
    return
  }

  dispatch(respondFail(data))
}
