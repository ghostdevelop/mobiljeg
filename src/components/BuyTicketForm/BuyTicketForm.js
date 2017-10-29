import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from "react-redux";

import { validate, changeInput, submit, renewSession } from '../../actions/forms/buyTicketFormActions';

import BuyTicketFormSuccess from '../BuyTicketFormSuccess/BuyTicketFormSuccess';

import LabeledInput from '../LabeledInput/LabeledInput';

import './BuyTicketForm.css';

const validation = {
  name: {
    required: true
  },
  email: {
    required: true,
    type: "email"
  },
  phone: {
    locale: "hu-HU",
    type: "phone"
  },
  qty: {
    required: true,
    min: 1,
    type: "number"
  }
}

class BuyTicketForm extends Component {

  render() {
    if (this.props.success){
      return(
            <BuyTicketFormSuccess {...this.props}/>
      );  
    } else {
      return(
        <div id="buy-ticket-form" className="shadow-6">
          <form>
            <h1><FontAwesome name='ticket' />Jegyvásárlás</h1>
            <LabeledInput name="name" type="text" placeholder="Név" value={this.props.inputs.name} invertColor error={this.props.error} onChange={this.props.onChangeInput}/>
            <LabeledInput name="email" type="email" placeholder="Email" value={this.props.inputs.email} invertColor error={this.props.error} onChange={this.props.onChangeInput}/>
            <LabeledInput name="phone" type="tel" placeholder="Telefonszám" value={this.props.inputs.phone} invertColor error={this.props.error} onChange={this.props.onChangeInput}/>
            <LabeledInput name="qty" type="text" placeholder="Mennyiség" value={this.props.inputs.qty} pattern="[0-9]*" invertColor error={this.props.error} onChange={this.props.onChangeInput}/>
            <div className="buy-ticket-summary">
              <span>Összesen</span>
              <span className="amount">{this.props.inputs.summary} Ft</span>
            </div>
            <input type="submit" className="btn btn-inv btn-fullwidth" value="Vásárlás" disabled={!this.props.validated} onClick={this.props.onSubmitForm}/>
          </form>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({ ...state.buyTicketForm });

const mapDispatchToProps = dispatch => ({
  onChangeInput: e => {
    dispatch(changeInput(e.target, validation));
  },
  onSubmitForm: e => {
    e.preventDefault();
    dispatch(validate(validation));
    dispatch(submit());
  },
  onRenewSession: e => {
    dispatch(renewSession(e.target, validation));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BuyTicketForm);
