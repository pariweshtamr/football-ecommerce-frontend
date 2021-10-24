import styled from 'styled-components'
import { mobile } from '../../responsive'

export const ProductContainer = styled.div``
export const ProductWrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: 'column', padding: '10px' })}
`
export const ImgContainer = styled.div`
  flex: 1;
`
export const Image = styled.img`
  width: 100%;

  ${mobile({ margin: '20px 0' })}
`
export const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;

  ${mobile({ padding: '0 10px' })}
`
export const ProductTitle = styled.h1`
  font-weight: 300;
`
export const ProductDescription = styled.p`
  margin: 20px 0;
`
export const ProductPrice = styled.div`
  font-weight: 100;
  font-size: 40px;
`
export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;

  ${mobile({ width: '100%' })}
`
export const QtyContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
export const Quantity = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`
export const Button = styled.button`
  padding: 10px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #f8f4f4;
  }
`
