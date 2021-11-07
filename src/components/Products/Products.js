import React from 'react'
import { ProductsContainer } from './ProductsStyles'
import { products } from '../../data'
import ProductItem from './ProductItem'

const Products = () => {
  return (
    <div>
      <ProductsContainer>
        {products.map((product) => (
          <ProductItem product={product} key={product._id} />
        ))}
      </ProductsContainer>
    </div>
  )
}

export default Products
