import Axios from 'axios'

const rootUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.ROOT_URL
    : 'http://localhost:8000/api/v1'
const prodApi = rootUrl + '/product'

export const getProducts = async () => {
  try {
    const { data } = await Axios.get(prodApi)
    return data
  } catch (error) {
    return error?.response?.data || { status: 'error', message: error.message }
  }
}

export const getAProductById = async (_id) => {
  try {
    const { data } = await Axios.get(`${prodApi}/${_id}`)
    console.log(data)
    return data
  } catch (error) {
    return error?.response?.data
  }
}
