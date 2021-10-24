import React from 'react'
import {
  CategoryButton,
  CategoryItemContainer,
  CategoryImage,
  CategoryInfo,
  CategoryTitle,
} from './CategoriesStyle'
import { Link } from 'react-router-dom'

const CategoryItem = ({ item }) => {
  return (
    <div>
      <CategoryItemContainer>
        <Link to={`/products/${item.cat}`}>
          <CategoryImage src={item.img} />
          <CategoryInfo>
            <CategoryTitle>{item.title}</CategoryTitle>
            <CategoryButton>SHOP NOW</CategoryButton>
          </CategoryInfo>
        </Link>
      </CategoryItemContainer>
    </div>
  )
}

export default CategoryItem
