import React from 'react';
import AppBar from 'material-ui/AppBar';
import NavigationIcon from 'material-ui/svg-icons/navigation/menu';
import FlatButton from 'material-ui/FlatButton';
import { grey700 } from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';

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
  },
  grey: {
    color: grey700
  }
};

const Header = props => (
  <AppBar
    style={{ backgroundColor: '#fff' }}
    iconElementLeft={
      <div style={styles.align}>
        {!props.hideNav && <NavigationIcon style={styles.navIcon} />}
        <img
          src={process.env.PUBLIC_URL + '/logo.png'}
          alt='logo'
          style={styles.logo}
        />
      </div>
    }
    iconElementRight={
      <div style={{ marginTop: '.7em' }}>
        <FlatButton
          label='Report'
          style={styles.grey}
          containerElement={<Link to='/patients' />}
        />
        <FlatButton
          label='About'
          style={styles.grey}
          containerElement={<Link to='/about' />}
        />
      </div>
    }
    onLeftIconButtonTouchTap={props.toggleDrawer}
  />
);

export default Header;
