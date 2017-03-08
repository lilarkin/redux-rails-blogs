import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store';
import { browserHistory, Router } from 'react-router';
import routes from './routes';
import './index.css';

ReactDOM.render(
 <Provider store={store}>
   <Router history={browserHistory} routes={routes} />
 </Provider>,
 document.getElementById('root')
);
