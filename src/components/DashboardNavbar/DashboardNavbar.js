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
import { useDispatch } from 'react-redux'
import { userLogout } from '../../pages/User-auth-slice/userAction'

const DashboardNavbar = () => {
  const dispatch = useDispatch()

  const handleOnLogout = () => {
    dispatch(userLogout())
  }

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
          <MenuItem onClick={handleOnLogout}>LOGOUT</MenuItem>

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
