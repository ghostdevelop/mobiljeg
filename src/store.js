import { applyMiddleware, createStore} from 'redux';
import { logger } from "redux-logger";
import thunk from 'redux-thunk';
import promise from "redux-promise-middleware";
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import reducer from "./reducers";

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const routeMiddleware = routerMiddleware(history)

const middleware = applyMiddleware(promise(), thunk, logger, routeMiddleware);

export default createStore(reducer, middleware);
