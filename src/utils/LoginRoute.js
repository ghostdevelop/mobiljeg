import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from "../containers/login";

class LoginRoute extends Component {

  render() {
      return this.props.isAuthenticated
        ?
          <Redirect to={{
            pathname: this.props.location.state ? this.props.location.state.from : "/",
            state: { from: "/login"}
          }} />
        :
          <Route path="/login" component={Login} />
  }

}

export default connect(state => ({
  isAuthenticated: state.auth.isAuthenticated,
}))(LoginRoute);
