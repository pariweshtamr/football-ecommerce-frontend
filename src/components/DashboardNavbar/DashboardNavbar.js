import React from 'react'
import {
  Center,
  Left,
  Logo,
  MenuItem,
  NavContainer,
  NavWrapper,
  Right,
} from '../Navbar/NavbarStyles'
import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const DashboardNavbar = () => {
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
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>

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

export default DashboardNavbar
