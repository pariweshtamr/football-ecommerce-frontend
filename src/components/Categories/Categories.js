import React, { useEffect } from 'react'
import { CategoryContainer } from './CategoriesStyle'
import CategoryItem from './CategoryItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from './CategoryAction'
import { Alert, Spinner } from 'react-bootstrap'

const Categories = () => {
  const dispatch = useDispatch()
  const { isPending, categoryResponse, categories } = useSelector(
    (state) => state.category,
  )

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])
  return (
    <div>
      <CategoryContainer>
        {isPending && <Spinner variant="info" animation="border" />}
        {categoryResponse.message && (
          <Alert
            variant={
              categoryResponse.status === 'success' ? 'success' : 'danger'
            }
          >
            {' '}
            {categoryResponse.message}
          </Alert>
        )}
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </CategoryContainer>
    </div>
  )
}

export default Categories
