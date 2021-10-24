import React from 'react'
import { CategoryContainer } from './CategoriesStyle'
import { categories } from '../../data'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div>
      <CategoryContainer>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </CategoryContainer>
    </div>
  )
}

export default Categories
