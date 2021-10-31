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
          <Link to="/">
            <Logo>Soccer store.</Logo>
          </Link>
        </Left>
        <Center></Center>
        <Right>
          {/* IF USER IS NOT LOGGED IN */}
          <Link to="/register">
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          {/* IF USER IS LOGGED IN */}
          {/* Hello User */}
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
