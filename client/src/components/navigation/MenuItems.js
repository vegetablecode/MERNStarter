import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import { Menu } from "antd";

class MenuItems extends Component {
  render() {
    return (
      <Menu mode={this.props.mode}>
        <Menu.Item key="home">
          <Link to="/">
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">
            About
          </Link>
        </Menu.Item>
        <Menu.Item key="signin">
          <Link to="/signin">
            Sign In
          </Link>
        </Menu.Item>
        <Menu.Item key="signup">
          <Link to="/signup">
            Sign Up
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(MenuItems);
