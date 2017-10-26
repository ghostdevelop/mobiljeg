import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {

  render() {
      return this.props.isAuthenticated
        ?
          <Route exact path={this.props.path} component={this.props.component} />
        :
          <Redirect to={{ pathname: "/login", state: { from: this.props.path} }} />
  }

}

export default connect(state => ({
  isAuthenticated: state.auth.isAuthenticated,
}))(PrivateRoute);
