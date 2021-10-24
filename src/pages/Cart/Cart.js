import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import {
  CartBottom,
  CartContainer,
  CartPriceDetail,
  CartProduct,
  CartProductAmountContainer,
  CartProductDescription,
  CartProductDetails,
  CartProductId,
  CartProductImage,
  CartProductInfo,
  CartProductName,
  CartProductPrice,
  CartProductQty,
  CartSummary,
  CartSummaryButton,
  CartSummaryItem,
  CartSummaryItemPrice,
  CartSummaryItemText,
  CartSummaryTitle,
  CartTitle,
  CartTop,
  CartTopButton,
  CartTopTexts,
  CartWrapper,
  Hr,
  TopText,
} from '../PageStyles/CartStyles'

const Cart = () => {
  return (
    <CartContainer>
      <Navbar />
      <CartWrapper>
        <CartTitle>Your Cart</CartTitle>
        <CartTop>
          <CartTopButton>CONTINUE SHOPPING</CartTopButton>
          <CartTopTexts>
            <TopText>Shopping Bad(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </CartTopTexts>
          <CartTopButton type="filled">CHECKOUT NOW</CartTopButton>
        </CartTop>

        <CartBottom>
          <CartProductInfo>
            <CartProduct>
              <CartProductDetails>
                <CartProductImage src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b84fbd08-fed7-417f-a0ec-8a5aca6909e5/custom-nike-mercurial-superfly-8-elite-by-you.png" />
                <CartProductDescription>
                  <CartProductName>
                    <b>Product:</b> Nike Mercurial Superfly 8 Elite
                  </CartProductName>
                  <CartProductId>
                    <b>ID:</b> 13446352
                  </CartProductId>
                </CartProductDescription>
              </CartProductDetails>
              <CartPriceDetail>
                <CartProductAmountContainer>
                  <Add />
                  <CartProductQty>2</CartProductQty>
                  <Remove />
                </CartProductAmountContainer>
                <CartProductPrice>$320</CartProductPrice>
              </CartPriceDetail>
            </CartProduct>
            <Hr />
            <CartProduct>
              <CartProductDetails>
                <CartProductImage src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b84fbd08-fed7-417f-a0ec-8a5aca6909e5/custom-nike-mercurial-superfly-8-elite-by-you.png" />
                <CartProductDescription>
                  <CartProductName>
                    <b>Product:</b> Nike Mercurial Superfly 8 Elite
                  </CartProductName>
                  <CartProductId>
                    <b>ID:</b> 13446352
                  </CartProductId>
                </CartProductDescription>
              </CartProductDetails>
              <CartPriceDetail>
                <CartProductAmountContainer>
                  <Add />
                  <CartProductQty>2</CartProductQty>
                  <Remove />
                </CartProductAmountContainer>
                <CartProductPrice>$320</CartProductPrice>
              </CartPriceDetail>
            </CartProduct>
          </CartProductInfo>
          <CartSummary>
            <CartSummaryTitle>ORDER SUMMARY</CartSummaryTitle>
            <CartSummaryItem>
              <CartSummaryItemText>Subtotal</CartSummaryItemText>
              <CartSummaryItemPrice>$320</CartSummaryItemPrice>
            </CartSummaryItem>
            <CartSummaryItem>
              <CartSummaryItemText>Shipping</CartSummaryItemText>
              <CartSummaryItemPrice>$ 4.99</CartSummaryItemPrice>
            </CartSummaryItem>
            <CartSummaryItem type="total">
              <CartSummaryItemText>Total</CartSummaryItemText>
              <CartSummaryItemPrice>$$$</CartSummaryItemPrice>
            </CartSummaryItem>
            <CartSummaryButton>CHECKOUT NOW</CartSummaryButton>
          </CartSummary>
        </CartBottom>
      </CartWrapper>
      <Footer />
    </CartContainer>
  )
}

export default Cart
