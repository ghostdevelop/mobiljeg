import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Navigation extends Component {

  constructor(props){
    super(props);

    this.onChangeLocation = this.onChangeLocation.bind(this)
  }

  onChangeLocation(e){
    this.props.history.push("/login")
  }

  render() {
    return(
      <div id="menu-header">
        {this.props.isAuthenticated
        ?
          <div className="user-name">
            <FontAwesome name='user' /><b>Kovács Elemér</b>
          </div>
        :
          <div className="require-auth">
            <button to="/login" onClick={this.onChangeLocation}><FontAwesome name='user' />Bejelentkezés</button>
            <button to="/login"><FontAwesome name='user' />Regisztráció</button>
          </div>
        }
      </div>
    );

  }
}

export default Navigation;
