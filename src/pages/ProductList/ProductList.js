import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Products from '../../components/Products/Products'
import {
  Filter,
  FilterContainer,
  FilterText,
  Option,
  ProductListContainer,
  ProductListTitle,
  ProductListSelect,
} from '../PageStyles/ProductListStyles'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Spinner } from 'react-bootstrap'
import { useEffect } from 'react'
import { fetchProducts } from '../Product/ProductAction'

const ProductList = () => {
  const dispatch = useDispatch()
  const { products, isPending, productResponse } = useSelector(
    (state) => state.product,
  )

  useEffect(() => {
    !products && dispatch(fetchProducts())
  }, [dispatch, products])

  return (
    <div>
      <ProductListContainer>
        <Navbar />

        <ProductListTitle>Boots</ProductListTitle>
        <FilterContainer>
          <Filter>
            <FilterText>Select a brand:</FilterText>

            <ProductListSelect name="brand">
              <Option>All</Option>
              <Option selected={true}>Nike</Option>
              <Option>Adidas</Option>
              <Option>Puma</Option>
            </ProductListSelect>
          </Filter>
        </FilterContainer>
        {isPending && <Spinner variant="info" animation="border" />}

        {productResponse.message && (
          <Alert
            variant={
              productResponse.status === 'success' ? 'success' : 'danger'
            }
          >
            {' '}
            {productResponse.message}
          </Alert>
        )}
        {products.map((product) => (
          <Products key={product?._id} product={product} />
        ))}

        <Footer />
      </ProductListContainer>
    </div>
  )
}

export default ProductList
