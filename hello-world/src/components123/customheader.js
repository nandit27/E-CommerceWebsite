import React, { Component } from 'react'

export class Customheader extends Component {
  render() {
    return (
      <div>
        <ol>
          <li>{this.props.name}</li>
            <li>Home</li>
            <li>User Profile</li>
            <li>Contact Us</li>
        </ol>
        
      </div>
    )
  }
}

export default Customheader