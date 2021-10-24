import React, { useState } from 'react'
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
import { useLocation } from 'react-router-dom'

const ProductList = () => {
  const location = useLocation()
  const cat = location.pathname.split('/')[2]

  const [filter, setFilter] = useState({})

  const handleFilters = (e) => {
    const value = e.target.value

    setFilter({
      ...filter,
      [e.target.name]: value,
    })
  }
  console.log(filter)

  return (
    <div>
      <ProductListContainer>
        <Navbar />

        <ProductListTitle>Boots</ProductListTitle>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>

            <ProductListSelect name="brand" onChange={handleFilters}>
              <Option>Nike</Option>
              <Option>Adidas</Option>
              <Option>Puma</Option>
            </ProductListSelect>
          </Filter>
        </FilterContainer>
        <Products cat={cat} filter={filter} />
        <Footer />
      </ProductListContainer>
    </div>
  )
}

export default ProductList
