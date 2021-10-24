import styled from 'styled-components'
import { mobile } from '../../responsive'

export const CartContainer = styled.div``
export const CartWrapper = styled.div`
  padding: 20px;

  ${mobile({ padding: '10px' })}
`
export const CartTitle = styled.h1`
  font-weight: 300;
  text-align: center;
`
export const CartTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  ${mobile({ padding: '5px', margin: '20px 0' })}
`
export const CartTopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  color: ${(props) => props.type === 'filled' && 'white'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};

  ${mobile({ padding: '5px', fontSize: '13px' })}
`
export const CartTopTexts = styled.div``
export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;

  ${mobile({ display: 'none' })}
`
export const CartBottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: 'column' })}
`
export const CartProductInfo = styled.div`
  flex: 3;

  ${mobile({ marginBottom: '40px' })}
`
export const CartProduct = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: 'column' })}
`
export const CartProductDetails = styled.div`
  display: flex;
  flex: 2;
`
export const CartProductImage = styled.img`
  width: 200px;
`
export const CartProductDescription = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const CartProductName = styled.span``
export const CartProductId = styled.span``
export const CartPriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CartProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
export const CartProductQty = styled.div`
  font-size: 24px;
  margin: 5px;

  ${mobile({ margin: '0px 15px' })}
`
export const CartProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`
export const Hr = styled.hr`
  background-color: #1a1a1a;
  border: none;
  height: 1px;
  width: 90%;
`
export const CartSummary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  padding: 20px;
  height: 50vh;
`
export const CartSummaryTitle = styled.h2`
  font-weight: 300;
`
export const CartSummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '600'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`
export const CartSummaryItemText = styled.span`
  font-weight: ${(props) => props.type === 'total' && '500'};
`
export const CartSummaryItemPrice = styled.span``
export const CartSummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
`
