import { ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import {
  ProductIcon,
  ProductImage,
  ProductInfo,
  ProductItemContainer,
} from './ProductsStyles'

const ProductItem = ({ item }) => {
  return (
    <div>
      <ProductItemContainer>
        <ProductImage src={item.img} />
        <ProductInfo>
          <ProductIcon>
            <ShoppingCartOutlined />
          </ProductIcon>
        </ProductInfo>
      </ProductItemContainer>
    </div>
  )
}

export default ProductItem
