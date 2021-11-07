import React from 'react'
import {
  ProductImage,
  ProductPrice,
  ProductItemContainer,
} from './ProductsStyles'
import Rating from '../Rating/Rating'
import { Link } from 'react-router-dom'

const ProductItem = (props) => {
  const { product } = props
  return (
    <div key={product._id}>
      <ProductItemContainer>
        <ProductImage src={product.img} alt={product.title} />

        <Link to={`/product/${product._id}`}>
          <p>{product.title}</p>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <ProductPrice>$ {product.price}</ProductPrice>
      </ProductItemContainer>
    </div>
  )
}

export default ProductItem
