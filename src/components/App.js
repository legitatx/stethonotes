import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import NavigationIcon from 'material-ui/svg-icons/navigation/menu';
import { grey700 } from 'material-ui/styles/colors';
import UserOverview from './UserOverview';
import Recorder from './Recorder';
import { data } from '../mock.js';

const UserMenuItem = ({ firstName, lastName }) => (
  <MenuItem>
    {firstName} {lastName}
  </MenuItem>
);

const styles = {
  navIcon: {
    width: 30,
    height: 30,
    marginRight: '.4em',
    color: grey700
  },
  logo: {
    width: 200,
    height: 50
  }
};

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
          style={{ backgroundColor: '#fff' }}
          iconElementLeft={
            <div style={styles.align}>
              <NavigationIcon style={styles.navIcon} />
              <img
                src={process.env.PUBLIC_URL + '/logo.png'}
                alt='logo'
                style={styles.logo}
              />
            </div>
          }
          onLeftIconButtonTouchTap={this.toggleDrawer}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({ open })}
        >
          <AppBar
            title={<span style={{ color: grey700 }}>Patients</span>}
            style={{ backgroundColor: '#fff' }}
            iconElementLeft={<span />}
          />
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
