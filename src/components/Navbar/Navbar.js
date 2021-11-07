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
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../pages/User-auth-slice/userAction'

const Navbar = () => {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.user)

  const handleOnLogout = () => {
    dispatch(userLogout())
  }

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
          {!isLoggedIn ? (
            <>
              <Link to="/register">
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to="/login">
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          ) : (
            <>
              <MenuItem>HELLO</MenuItem>
              <MenuItem onClick={handleOnLogout}>LOGOUT</MenuItem>
            </>
          )}

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
