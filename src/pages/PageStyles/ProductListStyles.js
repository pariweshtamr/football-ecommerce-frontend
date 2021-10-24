import styled from 'styled-components'
import { mobile } from '../../responsive'

export const ProductListContainer = styled.div``

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Filter = styled.div`
  padding: 0 20px;
  margin: 20px;
`
export const ProductListTitle = styled.h1`
  padding: 0 20px;
  margin: 20px;
  font-weight: 600;
`

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

  ${mobile({ marginRight: '16px' })}
`

export const ProductListSelect = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0' })}
`
export const Option = styled.option``
