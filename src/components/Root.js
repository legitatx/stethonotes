import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import About from './About';
import Chat from './Chat';
import PatientOverview from './PatientOverview';

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={About} />
            <Route path='/patients' component={App} />
            <Route path='/patient-overview' component={PatientOverview} />
            <Route path='/chat' component={Chat} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default Root;
