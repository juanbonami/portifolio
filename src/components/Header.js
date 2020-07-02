import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export class Header extends Component {
    state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    

    return (
      <Menu stackable>


        

        
      </Menu>
    )
  }
}

export default Header
