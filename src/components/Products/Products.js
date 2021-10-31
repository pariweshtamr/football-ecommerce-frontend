import React from 'react'
import { ProductsContainer } from './ProductsStyles'
import { popularProducts } from '../../data'
import ProductItem from './ProductItem'

const Products = () => {
  return (
    <div>
      <ProductsContainer>
        {popularProducts.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </div>
  )
}

export default Products
