import { FETCH_PATIENT_INFO } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PATIENT_INFO: {
      return {
        ...state,
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
}
