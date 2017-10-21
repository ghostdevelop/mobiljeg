import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from "./authReducer";
import user from "./userReducer";

export default combineReducers({
  auth: auth,
  user: user,
  routing: routerReducer
});
