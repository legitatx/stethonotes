export const FETCH_PATIENT_INFO = 'FETCH_PATIENT_INFO';

export function fetchPatientInfo() {
  const data = {
    location: [
      { id: 1, name: 'Frontal Right', checked: true },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' }
    ],
    radiation: [
      { id: 1, name: 'Neck', checked: true },
      { id: 2, name: 'Shoulders' },
      { id: 3, name: 'Upper thorax' }
    ]
  };
  return {
    type: FETCH_PATIENT_INFO,
    payload: data
  };
}
