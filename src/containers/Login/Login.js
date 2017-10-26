import React, { Component } from 'react';
import { connect } from "react-redux";

import { authenticate } from "../../actions/authActions";

import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import './Login.css';

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
      <div id="login">

        <div className="section-content">
          <LoginForm onSubmitLogin={this.onSubmitLogin}/>
          <RegistrationForm />
        </div>

      </div>
    );
  }
}

export default connect(state => ({
  user: state.user
}))(Login);
