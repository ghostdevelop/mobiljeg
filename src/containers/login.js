import React, { Component } from 'react';
import { connect } from "react-redux";

import { authenticate } from "../actions/authActions";

class Login extends Component {

  constructor(props){
    super(props);

    this.onSubmitLogin = this.onSubmitLogin.bind(this)
  }

  onSubmitLogin(){
    this.props.dispatch(authenticate());
  }


  render() {
    return (
      <div className="Login">
        <header className="Dashboard-header">
          <h1 className="Dashboard-title" onClick={this.onSubmitLogin}>Welcome to Login</h1>
        </header>
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user
}))(Login);
