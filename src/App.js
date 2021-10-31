import React from 'react'
import './App.css'
import Cart from './pages/Cart/Cart'
import HomePage from './pages/HomePage/HomePage'
import Login from './pages/Login/Login'
import Product from './pages/Product/Product'
import ProductList from './pages/ProductList/ProductList'
import Register from './pages/Register/Register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PageNotFound from './components/PageNotFound/PageNotFound'
import EmailVerification from './pages/EmailVerification/EmailVerification'
import Dashboard from './pages/Dashboard/dashboard'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/products/:category">
          <ProductList />
        </Route>
        <Route exact path="/product/:id">
          <Product />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/email-verification">
          <EmailVerification />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
