import React from 'react';
import UserIcon from 'material-ui/svg-icons/action/account-circle';
import { grey500 } from 'material-ui/styles/colors';

const styles = {
  largeIcon: {
    width: 180,
    height: 180
  }
};
const UserOverview = props => (
  <div className='user-card'>
    <UserIcon color={grey500} style={styles.largeIcon} />
    <div className='user-card-info'>
      <h3>
        {props.name} <span>(Last Visit 3 wks ago)</span>
      </h3>
      <h3>
        Concern - <span>{props.concern}</span>
      </h3>
    </div>
  </div>
);

export default UserOverview;
