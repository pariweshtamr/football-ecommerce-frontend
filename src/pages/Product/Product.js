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
import { popularProducts } from '../../data'

const Product = (props) => {
  console.log(props)
  const product = popularProducts.find((x) => x.id === props.match.params.id)
  if (!product) {
    return <div>Product Not Found!</div>
  }
  return (
    <ProductContainer>
      <Navbar />
      <ProductWrapper>
        <ImgContainer>
          <Image src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b84fbd08-fed7-417f-a0ec-8a5aca6909e5/custom-nike-mercurial-superfly-8-elite-by-you.png" />
        </ImgContainer>
        <InfoContainer>
          <ProductTitle>Nike Mercurial Superfly 8 Elite</ProductTitle>
          <ProductDescription>
            The Nike Mercurial Superfly 8 Elite has been designed to enhance
            your game by bringing together the eessential components of speed,
            optimal touch and dependable traction.
          </ProductDescription>
          <ProductPrice>$320</ProductPrice>

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
