import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  SidebarLayout,
  SidebarStyled,
  SidebarList,
  SidebarListItem,
} from './SidebarStyles'

const Sidebar = () => {
  return (
    <SidebarLayout>
      <div className="avatar">
        <img src="" alt="mini-display-pic" />
      </div>
      <SidebarStyled>
        <SidebarList>
          <SidebarListItem>
            <NavLink
              to="/purchase-history"
              activeClassName="active-class"
              exact
            >
              Purchase history
            </NavLink>
          </SidebarListItem>
          <SidebarListItem>
            <NavLink to="/edit-profile" activeClassName="active-class" exact>
              Edit Profile
            </NavLink>
          </SidebarListItem>
        </SidebarList>
      </SidebarStyled>
    </SidebarLayout>
  )
}

export default Sidebar
