import styled from 'styled-components'
import { mobile } from '../../responsive'

export const ProductsContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const ProductInfo = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`
export const ProductItemContainer = styled.div`
  flex: 1;
  margin: 10px 0;
  min-width: 280px;
  height: 350px;
  padding: 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5fbfd;
  position: relative;

  &:hover ${ProductInfo} {
    opacity: 1;
  }

  ${mobile({ minWidth: '50vh' })}
`

export const ProductImage = styled.img`
  height: 100%;
  z-index: 2;
  margin-bottom: 20px;

  ${mobile({ width: '100%' })}
`

export const ProductIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;

  &:hover {
    background: #e9f5f5;
    transform: scale(1.1);
    cursor: pointer;
  }
`
export const ProductPrice = styled.div``
