import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

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
          as={Link}
          to='/about'
        >
          About
        </Menu.Item>

        <Menu.Item
          name='projects'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
          as={Link}
          to='/projects'
        >
          Projects
        </Menu.Item>

        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
          as={Link}
          to='/contact'
        >
          Contact
        </Menu.Item>
      </Menu>
    )
  }
}

export default Header
