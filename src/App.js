import React from 'react'
import './App.css'
import Cart from './pages/Cart/Cart'
import HomePage from './pages/HomePage/HomePage'
import Login from './pages/Login/Login'
import Product from './pages/Product/Product'
import ProductList from './pages/ProductList/ProductList'
import Register from './pages/Register/Register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
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
      </Switch>
    </Router>
  )
}

export default App
