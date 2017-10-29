import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import UserOverview from './UserOverview';
import Recorder from './Recorder';
import { data } from '../mock.js';

const UserMenuItem = ({ firstName, lastName }) => (
  <MenuItem>
    {firstName} {lastName}
  </MenuItem>
);

class App extends Component {
  state = {
    open: false,
    tabIndex: 0,
    users: data
  };

  toggleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  handleChange = value => {
    this.setState({ tabIndex: value });
  };

  render() {
    return (
      <div>
        <AppBar
          title='Stethnotes'
          onLeftIconButtonTouchTap={this.toggleDrawer}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({ open })}
        >
          <AppBar title='Patients' iconElementLeft={<span />} />
          {this.state.users.map(user => (
            <UserMenuItem
              key={user.id}
              firstName={user.first_name}
              lastName={user.last_name}
            />
          ))}
        </Drawer>
        <div>
          <UserOverview name='Tay Johnson' concern='Headache' />
          <Recorder />
        </div>
      </div>
    );
  }
}

export default App;
