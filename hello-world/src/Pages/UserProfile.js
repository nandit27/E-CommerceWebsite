import React, { Component } from 'react'
import customheader from '../components123/customheader'
import customfooter from '../components123/customfooter'

export class UserProfile extends Component {
  render() {
    return (
      <div>
        <customheader name='User Profile'></customheader>
        This is user profile page.
        <customfooter />
    
      </div>
    )
  }
}

export default UserProfile