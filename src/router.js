import React, { Component } from 'react';
import { Provider } from "react-redux";
import { Switch, Redirect, Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import store from "./store";
import history from "./history";

import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Home from "./containers/Home/Home";
import BuyTicket from "./containers/BuyTicket/BuyTicket";
import TicketList from "./containers/TicketList/TicketList";

class Router extends Component {
  render() {
    return(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div id="wrapper">
            <Route render={(props) => (<Header {...props}/>)}/>
            <Switch>
              <Route exact path="/" render={(props) => (<Home {...props}/>)}/>
              <Route exact path="/jegyvasarlas" render={(props) => (<BuyTicket {...props}/>)}/>
              <Route exact path="/jegyek" render={(props) => (<TicketList {...props}/>)}/>
              <Redirect to="/" />
            </Switch>
            <Route render={(props) => (<Footer {...props}/>)}/>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Router;
