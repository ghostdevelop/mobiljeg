import update from 'immutability-helper';

const initialState = {
  inputs: {
    name: "",
    email: "",
    phone: "",
    qty: 0,
    summary: 0

  },
  validated: false,
  loading: false,
  success: false,
  failed: false,
  error: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case "INPUT_CHANGE": {
      return update(state, {
        inputs: {[action.payload.name]: {$set: action.payload.value}}
      });
    }

    case "VALIDATION_PASSED": {
      return update(state, {
        validated: {$set: true},
        error: {$set: action.payload.error}
      });
    }

    case "VALIDATION_FAILED": {
      return update(state, {
        validated: {$set: false},
        error: {$set: action.payload.error}
      });
    }

    case "SUBMISSION_STARTED": {
      return update(state, {
        loading: {$set: true}
      });
    }

    case "SUBMISSION_SUCCESS": {
      return update(state, {
        loading: {$set: false},
        success: {$set: true},
        inputs: {$set: action.payload}
      });
    }

    case "SUBMISSION_FAILED": {
      return update(state, {
        loading: {$set: false},
        failed: {$set: true}
      });
    }

    case "RENEW_SESSION": {
      return initialState;
    }

    default: {
      return {...state}
    }

  }
};
