import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import {
  AddContainer,
  Quantity,
  QtyContainer,
  Button,
  Image,
  ImgContainer,
  InfoContainer,
  ProductContainer,
  ProductDescription,
  ProductPrice,
  ProductTitle,
  ProductWrapper,
} from '../PageStyles/ProductStyles'
import { products } from '../../data'
import { Link } from 'react-router-dom'

const Product = (props) => {
  const product = products.find((x) => x._id === props.match.params.id)

  if (!product) {
    return <div>Product Not Found!</div>
  }
  return (
    <ProductContainer>
      <Navbar />
      <Link to="/products/:All">Back to product list</Link>
      <ProductWrapper>
        <ImgContainer>
          <Image src={product.img} alt={product.title} />
        </ImgContainer>
        <InfoContainer>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>$ {product.price}</ProductPrice>

          <AddContainer>
            <QtyContainer>
              <Remove />
              <Quantity>1</Quantity>
              <Add />
            </QtyContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </ProductWrapper>
      <Footer />
    </ProductContainer>
  )
}

export default Product
