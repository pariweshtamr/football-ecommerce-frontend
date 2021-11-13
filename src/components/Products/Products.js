import React, { useEffect } from 'react'
import { ProductsContainer } from './ProductsStyles'
import ProductItem from './ProductItem'
import { Spinner, Alert } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../pages/Product/ProductAction'

const Products = () => {
  const dispatch = useDispatch()
  const { isPending, productResponse, products } = useSelector(
    (state) => state.product,
  )

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  return (
    <div>
      <ProductsContainer>
        {isPending && <Spinner variant="info" animation="border" />}
        {productResponse.message && (
          <Alert
            variant={
              productResponse.status === 'success' ? 'success' : 'danger'
            }
          >
            {' '}
            {productResponse.message}
          </Alert>
        )}
        {products.map((product) => (
          <ProductItem product={product} key={product._id} />
        ))}
      </ProductsContainer>
    </div>
  )
}

export default Products
