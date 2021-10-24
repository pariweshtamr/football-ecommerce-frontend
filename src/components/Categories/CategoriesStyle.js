import styled from 'styled-components'
import { mobile } from '../../responsive'

export const CategoryContainer = styled.div`
  display: flex;
  padding: 30px;
  justify-content: space-between;

  ${mobile({ padding: '0px', flexDirection: 'column', marginTop: '30px' })}
`

export const CategoryItemContainer = styled.div`
  margin: 5px;
  position: relative;
`

export const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;

  ${mobile({ height: '50vh' })}
`

export const CategoryInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

export const CategoryTitle = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`
export const CategoryButton = styled.button`
  border: none;
  padding: 10px;
  background: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 10px;
`
