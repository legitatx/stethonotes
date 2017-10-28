import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route component={App} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
