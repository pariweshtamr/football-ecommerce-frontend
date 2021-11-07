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
import { products } from '../../data'

const ProductList = () => {
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
              <Option>Nike</Option>
              <Option>Adidas</Option>
              <Option>Puma</Option>
            </ProductListSelect>
          </Filter>
        </FilterContainer>
        {products.map((product) => (
          <Products key={product?._id} product={product} />
        ))}

        <Footer />
      </ProductListContainer>
    </div>
  )
}

export default ProductList
