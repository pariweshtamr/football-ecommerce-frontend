import React from 'react'
import { ProductsContainer } from './ProductsStyles'
import { popularProducts } from '../../data'
import ProductItem from './ProductItem'

const Products = (cat, filter) => {
  return (
    <div>
      <ProductsContainer>
        {popularProducts.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </ProductsContainer>
    </div>
  )
}

export default Products
