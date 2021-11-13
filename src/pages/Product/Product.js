import { Add, Remove } from '@material-ui/icons'
import React, { useEffect } from 'react'
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
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Spinner } from 'react-bootstrap'
import { fetchAProductById } from './ProductAction'

const Product = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const productDetails = useSelector((state) => state.product)

  const { isPending, productResponse, selectedProduct } = productDetails

  useEffect(() => {
    dispatch(fetchAProductById(id))
  }, [dispatch, id])

  return (
    <div>
      {isPending && <Spinner variant="info" animation="border" />}
      {productResponse.message && (
        <Alert
          variant={productResponse.status === 'success' ? 'success' : 'danger'}
        >
          {' '}
          {productResponse.message}
        </Alert>
      )}
      <ProductContainer>
        <Navbar />
        <Link to="/products/:All">Back to product list</Link>
        <ProductWrapper>
          <ImgContainer>
            <Image src={selectedProduct.img} alt={selectedProduct.title} />
          </ImgContainer>
          <InfoContainer>
            <ProductTitle>{selectedProduct.title}</ProductTitle>
            <ProductDescription>
              {selectedProduct.description}
            </ProductDescription>
            <ProductPrice>$ {selectedProduct.price}</ProductPrice>

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
    </div>
  )
}

export default Product
