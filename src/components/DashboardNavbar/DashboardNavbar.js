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
          <Link to="/dashboard">
            <Logo>Soccer store.</Logo>
          </Link>
        </Left>
        <Center></Center>
        <Right>
          <MenuItem>HELLO</MenuItem>
          <MenuItem>LOGOUT</MenuItem>

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
