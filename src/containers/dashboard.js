import React, { Component } from 'react';
import { connect } from "react-redux";

class Dashboard extends Component {

  render() {
    return (
      <div className="Dashboard">
        <header className="Dashboard-header">
          <h1 className="Dashboard-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user
}))(Dashboard);
