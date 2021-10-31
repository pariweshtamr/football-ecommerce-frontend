import React from 'react'
import Banner from '../../components/Banner/Banner'
import Categories from '../../components/Categories/Categories'
import DashboardNavbar from '../../components/DashboardNavbar/DashboardNavbar'
import Footer from '../../components/Footer/Footer'
import Products from '../../components/Products/Products'

const Dashboard = () => {
  return (
    <div>
      <DashboardNavbar />
      <Banner />
      <Categories />
      <Products />
      <Footer />
    </div>
  )
}

export default Dashboard
