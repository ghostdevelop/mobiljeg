import React, { Component } from 'react';
import { connect } from "react-redux";

import { getTickets } from '../../actions/ticketActions';

import './TicketList.css';

class TicketList extends Component {
  componentWillMount(){
    this.props.getTickets()
  }

  render() {

    let tickets = this.props.tickets && this.props.tickets.length > 0 ? this.props.tickets.map((item, key) => {
      return(
        <tr key={key}>
          <td>{item._id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.qty} db</td>
          <td>{item.summary} HUF</td>
          <td></td>
        </tr>
      );
    }) : []


    return (
      <div id="ticket-list" className="section">

        <div className="container">

          <div className="row block-title-holder">
            <div className="col-md-12">
              <h1 className="block-title">Jegyek</h1>
            </div>
          </div>

          <div className="row ticket-list">
            <table>
              <thead>
                <tr>
                  <th>Azonosító</th>
                  <th>Név</th>
                  <th>Email</th>
                  <th>Telefon</th>
                  <th>Mennyiség</th>
                  <th>Összeg</th>
                  <th>Műveletek</th>
                </tr>
              </thead>
              <tbody>
              {tickets.length > 0 ? tickets : <tr><td colSpan="7">Nincsenek jegyek</td></tr>}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.tickets});

const mapDispatchToProps = dispatch => ({
  getTickets: () => {
    dispatch(getTickets());
  },
  onSubmitForm: e => {
    e.preventDefault();
    // dispatch(validate(validation));
    // dispatch(submit());
  },
  onRenewSession: e => {
    // dispatch(renewSession(e.target, validation));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
