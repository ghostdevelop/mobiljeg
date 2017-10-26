import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import './css/shadow.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
