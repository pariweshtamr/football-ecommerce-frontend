import { ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import {
  ProductIcon,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductItemContainer,
} from './ProductsStyles'
import Rating from '../Rating/Rating'
import { Link } from 'react-router-dom'

const ProductItem = (props) => {
  const { product } = props
  return (
    <div key={product.id}>
      <ProductItemContainer>
        <ProductImage src={product.img} alt={product.title} />
        {/* <ProductInfo>
          <ProductIcon>
            <ShoppingCartOutlined />
          </ProductIcon>
        </ProductInfo> */}
        <Link to={`/product/${product.id}`}>
          <p>{product.title}</p>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <ProductPrice>$ {product.price}</ProductPrice>
      </ProductItemContainer>
    </div>
  )
}

export default ProductItem
