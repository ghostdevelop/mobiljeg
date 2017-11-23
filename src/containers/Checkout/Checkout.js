import React, { Component } from 'react';
import { connect } from "react-redux";

import { checkStatus } from '../../actions/ticketActions';


class Checkout extends Component {

  render() {
    return (
      <div id="profil" className="section">

          <div className="container">

            <div className="block-title-holder">
              <div className="col-md-12">
                <h1 className="block-title">Profil</h1>
              </div>
            </div>

        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.order });

const mapDispatchToProps = dispatch => ({
  checkStatus: () => {

  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
