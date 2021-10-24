import React from 'react'
import Banner from '../../components/Banner/Banner'
import Categories from '../../components/Categories/Categories'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Products from '../../components/Products/Products'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Categories />
      <Products />
      <Footer />
    </div>
  )
}

export default HomePage
