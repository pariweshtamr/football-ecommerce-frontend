import React, { useEffect } from 'react'
import Banner from '../../components/Banner/Banner'
import Categories from '../../components/Categories/Categories'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Products from '../../components/Products/Products'

import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { autoLogin } from '../User-auth-slice/userAction'
import { Spinner } from 'react-bootstrap'

const HomePage = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { isLoggedIn, isAutoLoginPending } = useSelector((state) => state.user)
  useEffect(() => {
    !isLoggedIn && dispatch(autoLogin())

    isLoggedIn && history.push('/dashboard')
  }, [isLoggedIn, history, dispatch])

  if (isAutoLoginPending) {
    return <Spinner variant="primary" animation="border" />
  }

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
