import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export class Header extends Component {
    state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>


        

        
      </Menu>
    )
  }
}

export default Header
