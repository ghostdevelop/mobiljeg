import React, { Component } from 'react';

import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import './Login.css';

class Login extends Component {

  render() {
    return (
      <div id="login">

        <div className="section-content">
          <LoginForm />
          <RegistrationForm />
        </div>

      </div>
    );
  }
}

export default Login
