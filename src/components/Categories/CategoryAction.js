import { getCategories } from '../../api/categoryAPI'
import {
  respondPending,
  respondFail,
  getCategoriesSuccess,
} from './CategorySlice'

export const fetchCategories = () => async (dispatch) => {
  dispatch(respondPending())
  const data = await getCategories()
  try {
    dispatch(getCategoriesSuccess(data))
  } catch (error) {
    dispatch(respondFail(data))
  }
}
