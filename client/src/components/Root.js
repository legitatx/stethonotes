import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import Recorder from './Recorder';
import PatientForm from './PatientForm';

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <div>
          <App />
          <Switch>
            <Route exact path='/' component={Recorder} />
            <Route path='/patient' component={PatientForm} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default Root;
