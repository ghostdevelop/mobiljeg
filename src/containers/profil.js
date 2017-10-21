import React, { Component } from 'react';
import { connect } from "react-redux";


class Profil extends Component {

  render() {
    return (
      <div className="Profil">
        <header className="Dashboard-header">
          <h1 className="Dashboard-title">Welcome to Profil</h1>
        </header>
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user
}))(Profil);
