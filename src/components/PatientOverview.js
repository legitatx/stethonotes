import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RefreshIndicator from 'material-ui/RefreshIndicator';

class PatientOverview extends Component {
  state = {
    isLoading: true,
    left: Math.floor(window.innerWidth / 2),
    top: Math.floor(window.innerHeight / 2)
  };

  componentDidMount() {
    this.fetchingData();
  }

  fetchingData() {
    const prom = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('perhaps');
      }, Math.floor(Math.random() * 2000) + 2000);
    });
    prom.then(data => {
      console.log('Fetched results...');
      this.setState({ isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div
          style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            height: '100vh',
            width: '100vw'
          }}
        >
          <RefreshIndicator
            size={100}
            left={this.state.left - 20}
            top={this.state.top - 20}
            status='loading'
          />
        </div>
      );
    }
    return <div>Hiya</div>;
  }
}

export default PatientOverview;
