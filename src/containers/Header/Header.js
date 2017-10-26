import React, { Component } from 'react';
import { connect } from "react-redux";

import Logo from '../../components/Logo/Logo';
import Menu from '../../components/Menu/Menu';

import './Header.css';

class Header extends Component {

  render() {
    return(
      <header id="header">
        <Menu {...this.props}/>
        <div className="header-content">
          <Logo />
        </div>
      </header>
    );

  }
}

export default connect(state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.user
}))(Header);
