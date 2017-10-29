import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import patient from './patientReducer';

export default combineReducers({
  patient,
  form: formReducer
});
