import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { fetchPatientInfo } from '../actions';
import CheckboxGroup from './CheckboxGroup';

class PatientForm extends Component {
  componentDidMount() {
    this.props.fetchPatientInfo();
  }
  render() {
    return (
      <form>
        <div>
          <div>Location</div>
          {this.props.location && (
            <Field
              name='location'
              component={CheckboxGroup}
              options={this.props.location}
            />
          )}
        </div>
        <div>Radiation</div>
        {this.props.radiation && (
          <Field
            name='radiation'
            component={CheckboxGroup}
            options={this.props.radiation}
          />
        )}
      </form>
    );
  }
}

PatientForm = reduxForm({
  form: 'patientForm',
  enableReinitialize: true
})(PatientForm);

PatientForm = connect(
  state => ({
    location: state.patient.location,
    radiation: state.patient.radiation
  }),
  {
    fetchPatientInfo
  }
)(PatientForm);

export default PatientForm;
