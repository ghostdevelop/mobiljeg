import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import LabeledInput from '../LabeledInput/LabeledInput';

import './LoginForm.css';

class LoginForm extends Component {

  render() {
    return(
      <div id="login-form" className="shadow-6">
        <h1><FontAwesome name='user' /> Bejelentkezés</h1>
        <LabeledInput name="email" type="email" label="Email"/>
        <LabeledInput name="email" type="password" label="Jelszó"/>
        <input type="submit" className="btn" value="Bejelentkezés" onClick={this.props.onSubmitLogin}/>
        <span className="forget-password"><FontAwesome name='key' />Elfelejtett jelszó</span>
      </div>
    );

  }
}

export default LoginForm;
