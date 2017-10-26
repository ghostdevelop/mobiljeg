import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from "./authReducer";
import user from "./userReducer";
import ticket from "./ticketReducer";

export default combineReducers({
  auth: auth,
  user: user,
  ticket: ticket,
  routing: routerReducer
});
