import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import App from './App';
import PatientForm from './PatientForm';

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={App} />
            <Route path='/patient' component={PatientForm} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default Root;
