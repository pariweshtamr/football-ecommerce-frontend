import React from 'react'
import { Nav } from 'react-bootstrap'
import { BackToHome } from './EditProfileStyles'

const EditProfile = () => {
  return (
    <div>
      <BackToHome>
        <Nav.Link href="/dashboard">Back to Home</Nav.Link>
      </BackToHome>
      Edit User Profile
    </div>
  )
}

export default EditProfile
