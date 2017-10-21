import React, { Component } from 'react';
import { connect } from "react-redux";

class Header extends Component {

  render() {
    return(
      (this.props.isAuthenticated
        ?
          <div className="Header">
            <header className="header">
              <h1 className="title">Header</h1>
            </header>
          </div>
        :
          <div className="Header">
            <header className="header">
              <h1 className="title">no header</h1>
            </header>
          </div>
      )    
    );

  }
}

export default connect(state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.user
}))(Header);
