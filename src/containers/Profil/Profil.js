import React, { Component } from 'react';
import { connect } from "react-redux";

class Profil extends Component {

  render() {
    return (
      <div id="profil" className="section">
        <div id="">
          <div className="container">
            <div className="row block-title-holder">
              <div className="col-md-12">
                <h1 className="block-title">Profil</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user
}))(Profil);
