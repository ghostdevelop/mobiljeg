import update from 'immutability-helper';

const initialState = {
  inputs: {
    name: "",
    email: "",
    phone: "",
    qty: 1,
    summary: 700

  },
  validated: false,
  loading: false,
  success: false,
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

    case "BUY_TICKET_FULFILLED": {
      return {ticket: {...action.payload}, succes: true}
    }

    case "BUY_TICKET_REJECTED": {
      return {ticket: {...action.payload}}
    }

    default: {
      return {...state}
    }

  }
};
