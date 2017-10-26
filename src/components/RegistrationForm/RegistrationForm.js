import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import LabeledInput from '../LabeledInput/LabeledInput';

import './RegistrationForm.css';

class RegistrationForm extends Component {

  render() {
    return(
      <div id="registration-form" className="shadow-6">
        <h1><FontAwesome name='user-plus' />Regisztráció</h1>
        <LabeledInput name="email" type="email" label="Email"/>
        <LabeledInput name="password" type="password" label="Jelszó"/>
        <LabeledInput name="password2" type="password" label="Jelszó mégegyszer"/>
        <input type="submit" className="btn" value="Regisztráció" />
      </div>
    );

  }
}

export default RegistrationForm;
