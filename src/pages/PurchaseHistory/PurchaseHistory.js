import React from 'react'
import { Nav } from 'react-bootstrap'

import { BackToHome } from './PurchaseHistoryStyles'

const PurchaseHistory = () => {
  return (
    <div>
      <BackToHome>
        <Nav.Link href="/dashboard">Back to Home</Nav.Link>
      </BackToHome>
      User Purchase History
    </div>
  )
}

export default PurchaseHistory
