import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from "react-redux";

import history from "./history";
import {authenticate} from './actions/userActions';

import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Home from "./containers/Home/Home";
import Profil from "./containers/Profil/Profil";
import BuyTicket from "./containers/BuyTicket/BuyTicket";
import TicketList from "./containers/TicketList/TicketList";

import LoginRoute from './components/LoginRoute';
import PrivateRoute from './components/PrivateRoute';

class Router extends Component {
  componentWillMount(){
      this.props.dispatch(authenticate())
  }

  render() {
    return(
      <ConnectedRouter history={history}>
        <div id="wrapper">
          <Route render={(props) => (<Header {...props}/>)}/>
          <Switch>
            <Route exact path="/" render={(props) => (<Home {...props}/>)}/>
            <Route exact path="/jegyvasarlas" render={(props) => (<BuyTicket {...props}/>)}/>
            <PrivateRoute  path="/jegyek" render={(props) => (<TicketList {...props}/>)}/>
            <PrivateRoute  path="/profil" render={(props) => (<Profil {...props}/>)}/>
            <LoginRoute />
            <Redirect to="/" />
          </Switch>
          <Route render={(props) => (<Footer {...props}/>)}/>
        </div>
      </ConnectedRouter>
    );
  }
}

export default connect(state => ({
 ...state.user
}))(Router);
