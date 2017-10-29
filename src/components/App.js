import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { data } from '../mock.js';

const UserMenuItem = ({ firstName, lastName }) => (
  <MenuItem>
    {firstName} {lastName}
  </MenuItem>
);

class App extends Component {
  state = {
    open: false,
    users: data
  };

  toggleDrawer = () => {
    this.setState({ open: !this.state.open });
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
      </div>
    );
  }
}

export default App;
