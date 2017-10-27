import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import './BuyTicketFormSuccess.css';

class BuyTicketFormSuccess extends Component {

  render() {
    console.log(this.props)
    return(
      <div id="buy-ticket-form-success" className="shadow-6">
        <h1><FontAwesome name='check-circle' />Sikeres vásárlás!</h1>
        <table className="ticket-reciept">
          <tbody>
            <tr>
              <td>Azonosító</td>
              <td>{this.props.inputs._id}</td>
            </tr>
            <tr>
              <td>Név</td>
              <td>{this.props.inputs.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{this.props.inputs.email}</td>
            </tr>
            {this.props.inputs.phone !== ""
              ?
              <tr>
                <td>Telefon</td>
                <td>{this.props.inputs.phone}</td>
              </tr>
              :
              <tr hidden/>
            }
            <tr>
              <td>Mennyiség:</td>
              <td>{this.props.inputs.qty}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td><b>Összesen</b></td>
              <td>{this.props.inputs.summary} HUF</td>
            </tr>
          </tfoot>
        </table>
        <div className="actions-holder">
          <button className="btn btn-inv"><FontAwesome name='print' />Nyomtatás</button>
          <button className="btn btn-inv" onClick={this.props.onRenewSession}><FontAwesome name='refresh' />Új tranzakció</button>
        </div>
      </div>
    );
  }
}

export default BuyTicketFormSuccess;
