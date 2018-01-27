import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import configureStore from './store'
import { loadState } from './util/localStorage';

import Layout from './components/Layout';

import Login from './pages/login';

const persistedState = loadState();

//Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

//Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const store = configureStore(persistedState, middleware);

export default class routes extends Component {
  render() {
    console.log(store.getState());
    return(
      <Provider store={ store }>
        <ConnectedRouter history={history}>
          <Layout>
            <Switch>
              <Route exact path="/" component={Login}/>
            </Switch>
          </Layout>
        </ConnectedRouter>
      </Provider>
    );
  }
}
