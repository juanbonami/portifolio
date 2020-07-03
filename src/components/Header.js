import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export class Header extends Component {
    state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted stackable>

        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>

        <Menu.Item
          name='project'
          active={activeItem === 'project'}
          onClick={this.handleItemClick}
        >
          Projects
        </Menu.Item>

        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        >
          Contact
        </Menu.Item>
      </Menu>
    )
  }
}

export default Header
