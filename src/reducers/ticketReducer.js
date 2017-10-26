import update from 'immutability-helper';

import validateInput from '../utils/validateInput';

const initialState = {
  inputs: {
    name: "",
    email: "",
    phone: "",
    qty: 1,
    summary: 700

  },
  error: [],
  success: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case "CHANGE_BUY_TICKET_FORM_INPUT": {
      let validatedInput = validateInput(action.payload.element.value, action.payload.validation[action.payload.element.name]);

      let data = {}

      data.inputs = {[action.payload.element.name]: {$set: validatedInput.value}}

      if (validatedInput.error.length > 0){
        data.error = {[action.payload.element.name]: {$set: validatedInput.error}}
      } else {
        data.error = {$unset: [action.payload.element.name]}
      }

      return update(state, {
        ...data
      });

    }

    case "SUBMIT_BUY_TICKET_FORM": {
      let error = {};

      for (const key of Object.keys(state.inputs)) {
          let validatedInput = validateInput(state.inputs[key], action.payload.validation[key]);

          if (validatedInput.error !== false)
            error[key] = validatedInput.error;
      }

      return update(state, {
        error: {$set: error}
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
