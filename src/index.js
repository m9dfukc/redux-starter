import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux-immutablejs'
import thunk from 'redux-thunk';
import Immutable from 'immutable';

import App from './containers/App';
import * as reducers from './reducers';

const initial = Immutable.Map({
  counter: {
    value: 111
  }
});

const reducer     = combineReducers(reducers),
      middleware  = applyMiddleware(thunk)(createStore),
      store       = middleware(reducer, initial);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
