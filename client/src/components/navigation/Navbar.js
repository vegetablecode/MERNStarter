import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Drawer, Button } from "antd";

import "./Navbar.css";
import LeftMenu from "./menus/LeftMenu";
import RightMenu from "./menus/RightMenu";
import MenuItems from "./menus/items/MenuItems";

class Navbar extends Component {
  state = {
    current: "mail",
    visible: false
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <nav className="menuBar">
        <div className="logo">
          <Link to="/">MERNApp</Link>
        </div>
        <div className="menuCon">
          <div className="leftMenu">
            <LeftMenu />
          </div>
          <div className="rightMenu">
            <RightMenu />
          </div>
          <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
            <span className="barsBtn" />
          </Button>
          <Drawer
            title="Menu"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <MenuItems mode="vertical" />
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
