import React, { Component, Fragment } from "react";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Modal, Form, Input, Icon, Alert } from "antd";

import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

class Login extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  state = {
    modal: false,
    email: "",
    password: "",
    msg: null
  };

  toggle = () => {
    // Clear errors
    this.props.clearErrors();

    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // Check for Login error
      if (error.id === "LOGIN_FAIL") {
        this.setState({
          msg: error.msg.msg
        });
      } else {
        this.setState({
          msg: null
        });
      }
    }

    // If authenticated, close modal & go to shoppingList
    if (this.state.modal) {
      if (this.props.isAuthenticated) {
        this.toggle();
      }
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    // Create user object
    const newUser = {
      email,
      password
    };

    // Attempt to login
    this.props.login(newUser, this.props.history);
  };

  render() {
    return (
      <Fragment>
        <Link onClick={this.toggle} to="#">
          Login
        </Link>
        <Modal
          visible={this.state.modal}
          onCancel={this.toggle}
          onOk={this.onSubmit}
          title="Login"
        >
          <div>
            <Form>
              {this.state.msg ? (
                <Alert
                  style={{ marginBottom: 20 }}
                  type="error"
                  message={this.state.msg}
                />
              ) : null}
              <Form.Item validateStatus={this.state.msg ? "error" : ""}>
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={this.onChange}
                />
              </Form.Item>
              <Form.Item validateStatus={this.state.msg ? "error" : ""}>
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={this.onChange}
                />
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(withRouter(Login));
