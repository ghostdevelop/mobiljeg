import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from "react-redux";

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
    type: "number"
  }
}

class BuyTicketForm extends Component {

  render() {
    return(
      <div id="buy-ticket-form" className="shadow-6">
        <form>
          <h1><FontAwesome name='ticket' />Jegyvásárlás</h1>
          <LabeledInput name="name" type="text" placeholder="Név" value={this.props.inputs.name} invertColor error={this.props.error} onChange={this.props.onChangeInput}/>
          <LabeledInput name="email" type="email" placeholder="Email" value={this.props.inputs.email} invertColor error={this.props.error} onChange={this.props.onChangeInput}/>
          <LabeledInput name="phone" type="tel" placeholder="Telefonszám" value={this.props.inputs.phone} invertColor error={this.props.error} onChange={this.props.onChangeInput}/>
          <LabeledInput name="qty" type="number" placeholder="Mennyiség" value={this.props.inputs.qty} invertColor min="1" error={this.props.error} onChange={this.props.onChangeInput}/>
          <div className="buy-ticket-summary">
            <span>Összesen</span>
            <span className="amount">{this.props.inputs.summary} Ft</span>
          </div>
          <input type="submit" className="btn btn-inv btn-fullwidth" value="Vásárlás" onClick={this.props.onSubmitForm}/>
        </form>
      </div>
    );

  }
}

const mapStateToProps = state => ({ ...state.ticket });

const mapDispatchToProps = dispatch => ({
  onChangeInput: e => {
    dispatch({ type: 'CHANGE_BUY_TICKET_FORM_INPUT', payload: {element: e.target, validation: validation}})
  },
  onSubmitForm: e => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_BUY_TICKET_FORM', payload: {validation: validation}})
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BuyTicketForm);
