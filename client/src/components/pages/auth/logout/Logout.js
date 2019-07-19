import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { logout } from "../../../../actions/authActions";

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  logoutAction = () => {
    this.props.history.push("/");
    this.props.logout();
  };

  render() {
    return (
      <Fragment>
        <Link onClick={this.logoutAction} to="#">
          Logout
        </Link>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { logout }
)(withRouter(Logout));
