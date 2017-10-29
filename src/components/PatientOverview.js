import React, { Component } from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import PlusOne from 'material-ui/svg-icons/image/exposure-plus-1';
import Header from './Header';

const data = {
  locations: [
    { id: 1, name: 'Frontal Right', checked: true },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' }
  ],
  radiations: [
    { id: 1, name: 'Neck', checked: true },
    { id: 2, name: 'Shoulders' },
    { id: 3, name: 'Upper thorax' }
  ],
  qualities: [
    { id: 1, name: 'Sharp', checked: true },
    { id: 2, name: 'Squeezing', checked: true }
  ]
};

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
    return (
      <div>
        <Header hideNav={false} toggleDrawer={this.toggleDrawer} />

        <h2 style={{ textAlign: 'center' }}>Patient Overview</h2>
        <Card>
          <CardHeader title='Locations' />
          <CardText style={{ paddingTop: '.1rem' }}>
            {data.locations.map(
              location =>
                location.checked && (
                  <Checkbox
                    key={location.id}
                    label={location.name}
                    checked={location.checked}
                  />
                )
            )}
            <Checkbox
              label='Add'
              uncheckedIcon={<PlusOne />}
              style={{ marginTop: '.5rem' }}
            />
          </CardText>
        </Card>
        <Card>
          <CardHeader title='Radiations' />
          <CardText style={{ paddingTop: '.1rem' }}>
            {data.radiations.map(
              radiation =>
                radiation.checked && (
                  <Checkbox
                    key={radiation.id}
                    label={radiation.name}
                    checked={radiation.checked}
                  />
                )
            )}
            <Checkbox
              label='Add'
              uncheckedIcon={<PlusOne />}
              style={{ marginTop: '.5rem' }}
            />
          </CardText>
        </Card>
        <Card>
          <CardHeader title='Qualities' />
          <CardText style={{ paddingTop: '.1rem' }}>
            {data.qualities.map(
              quality =>
                quality.checked && (
                  <Checkbox
                    key={quality.id}
                    label={quality.name}
                    checked={quality.checked}
                  />
                )
            )}
            <Checkbox
              label='Add'
              uncheckedIcon={<PlusOne />}
              style={{ marginTop: '.5rem' }}
            />
          </CardText>
        </Card>
      </div>
    );
  }
}

export default PatientOverview;
