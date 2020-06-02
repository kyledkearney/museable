import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import rootStore from './stores/rootStore'

import App from './views/App'
import './index.css';

import * as serviceWorker from './serviceWorker';

const initialState = {};
const baseRoot = '/'
const history = createBrowserHistory({basename: baseRoot})
const store = rootStore(initialState, history)
const root =   document.getElementById('root')

const render = (Component, el) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component history={history} dispatch={store.dispatch}/>
    </Provider>,
    el
  );
}; render(App, root)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

