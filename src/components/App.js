import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { grey700 } from 'material-ui/styles/colors';
import axios from 'axios';
import UserOverview from './UserOverview';
import Recorder from './Recorder';
import Header from './Header';
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
    users: data,
    data_uri: null
  };

  toggleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  handleChange = value => {
    this.setState({ tabIndex: value });
  };

  handleFile = e => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onload = upload => {
      this.setState({
        data_uri: upload.target.result,
        filename: file.name,
        filetype: file.type
      });
    };
    reader.readAsDataURL(file);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    axios
      .post('https://api.stethonotes.tech/recording', {
        data_uri: this.state.data_uri,
        filename: this.state.filename,
        filetype: this.state.filetype
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Header hideNav={false} toggleDrawer={this.toggleDrawer} />
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
        <div className='flexer'>
          <UserOverview name='Tay Johnson' concern='Headache' />
          <Recorder />
        </div>
      </div>
    );
  }
}

export default App;
