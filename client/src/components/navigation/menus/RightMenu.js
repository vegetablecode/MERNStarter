import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import MenuItems from "./items/MenuItems";

class RightMenu extends Component {
  render() {
    return <MenuItems mode="horizontal" />;
  }
}

export default withRouter(RightMenu);
