import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Menu } from "antd";

import Register from "../pages/auth/register/Register";
import Login from "../pages/auth/login/Login";
import Logout from "../pages/auth/logout/Logout";

class MenuItems extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const menuItems = isAuthenticated ? (
      // not authenticated
      <Menu mode={this.props.mode}>
        <Menu.Item key="dashboard">
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="logout">
          <Logout />
        </Menu.Item>
      </Menu>
    ) : (
      // authenticated
      <Menu mode={this.props.mode}>
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="signin">
          <Login />
        </Menu.Item>
        <Menu.Item key="signup">
          <Register />
        </Menu.Item>
      </Menu>
    );

    return menuItems;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(withRouter(MenuItems));
