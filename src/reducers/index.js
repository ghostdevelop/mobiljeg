import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from "./userReducer";
import buyTicketForm from "./forms/buyTicketFormReducer";
import loginForm from "./forms/loginFormReducer";
import registerForm from "./forms/registerFormReducer";
import tickets from "./ticketsReducer";

export default combineReducers({
  user: user,
  tickets: tickets,
  routing: routerReducer,
  buyTicketForm: buyTicketForm,
  loginForm: loginForm,
  registerForm: registerForm
});
