import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import EditProfile from '../EditProfile/EditProfile'
import { UserProfileStyled } from '../PageStyles/UserProfileStyles'
import PurchaseHistory from '../PurchaseHistory/PurchaseHistory'

const UserProfile = () => {
  return (
    <div>
      <Router>
        <Sidebar />
        <UserProfileStyled>
          <Switch>
            <Route path="/purchase-history" exact>
              <PurchaseHistory />
            </Route>
            <Route path="/edit-profile" exact>
              <EditProfile />
            </Route>
          </Switch>
        </UserProfileStyled>
      </Router>
    </div>
  )
}

export default UserProfile
