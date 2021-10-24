import React from 'react'
import {
  Center,
  Left,
  Logo,
  MenuItem,
  NavContainer,
  NavWrapper,
  Right,
} from './NavbarStyles'
import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <Left>
          <Logo>Soccer store.</Logo>
        </Left>
        <Center></Center>
        <Right>
          <Link to="/register">
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </NavWrapper>
    </NavContainer>
  )
}

export default Navbar
