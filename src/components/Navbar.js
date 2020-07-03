import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export class Navbar extends Component {
    state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>

        <Menu.Item
          name='About'
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
          as={Link}
          to='/'
        >
          About
        </Menu.Item>

        <Menu.Item
          name='Projects'
          active={activeItem === 'Projects'}
          onClick={this.handleItemClick}
          as={Link}
          to='/projects'
        >
          Projects
        </Menu.Item>

        <Menu.Item
          name='Contact'
          active={activeItem === 'Contact'}
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

export default Navbar
