import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <div>
          <Switch>
            <Route path='/patient' component={App} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default Root;
