import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import { Menu } from "antd";

class MenuItems extends Component {
  render() {
    return (
      <Menu mode={this.props.mode}>
        <Menu.Item key="home">
          <Link exact to="/">
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link exact to="/about">
            About
          </Link>
        </Menu.Item>
        <Menu.Item key="signin">
          <Link exact to="/signin">
            Sign In
          </Link>
        </Menu.Item>
        <Menu.Item key="signup">
          <Link exact to="/signup">
            Sign Up
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(MenuItems);
