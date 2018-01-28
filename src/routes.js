import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import configureStore from './store';
import { loadState } from './util/localStorage';

import Layout from './components/Layout';

import Login from './pages/login';
import CookAsst from './pages/CookAsst/CAwithoutTimer.js';
import CookAsstTimer from './pages/CookAsst/CAwithTimer.js';
import ViewRecipe from './pages/RecipeView.js';
import AddRecipe from './components/main/addRecipe/recipes';

const persistedState = loadState();

//Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

//Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

export const store = configureStore(persistedState, middleware);

export default class routes extends Component {
  render() {
    console.log(store.getState());
    return(
      <Provider store={ store }>
        <ConnectedRouter history={history}>
          <Layout>
            <Switch>
              <Route exact path="/" component={ Login } />
              <Route path="/cookingassistant" component={ CookAsst }/>
              <Route path="/cookingassistanttimer" component={ CookAsstTimer }/>
              <Route path="/viewrecipe" component={ ViewRecipe }/>
              <Route path="/addRecipe" component={ AddRecipe }/>
            </Switch>
          </Layout>
        </ConnectedRouter>
      </Provider>
    );
  }
}
