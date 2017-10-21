import React, { Component } from 'react';
import { Provider } from "react-redux";
import { Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import store from "./store";
import { authenticate } from "./actions/authActions";
import PrivateRoute from './utils/PrivateRoute';
import LoginRoute from './utils/LoginRoute';

import Header from "./containers/header";
import Dashboard from "./containers/dashboard";
import Profil from "./containers/profil";

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

class App extends Component {
  componentWillMount(){
    //store.dispatch(authenticate());
  }

  render() {
    return(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Header />
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard}/>
              <PrivateRoute path="/profil" component={Profil}/>
              <LoginRoute />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
