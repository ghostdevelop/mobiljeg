import React, { Component } from 'react';
import { connect } from "react-redux";

import { validate, changeInput, submit, renewSession } from '../../actions/ticketActions';

import BuyTicketForm from '../../components/BuyTicketForm/BuyTicketForm';
import BuyTicketFormSuccess from '../../components/BuyTicketFormSuccess/BuyTicketFormSuccess';
import BuyTicketInformations from '../../components/BuyTicketInformations/BuyTicketInformations';

import './BuyTicket.css';

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

class BuyTicket extends Component {

  render() {
    return (
      <div id="buy-tickets" className="section">

        <div className="container">

          <div className="row block-title-holder">
            <div className="col-md-12">
              <h1 className="block-title">Jegyvásárlás</h1>
            </div>
          </div>

          <div className="row buy-tickets">
          {this.props.success
            ?
              <BuyTicketFormSuccess {...this.props}/>
            :
              <BuyTicketForm {...this.props}/>
          }
              <BuyTicketInformations />
          </div>

        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.ticket });

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

export default connect(mapStateToProps, mapDispatchToProps)(BuyTicket);
