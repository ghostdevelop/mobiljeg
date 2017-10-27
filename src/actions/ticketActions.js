import axios from "axios";

import validateInput from '../utils/validateInput';
import { isEmptyObject } from '../utils/validations';

export function changeInput(e, validation){
  return function(dispatch, getState){
      let validatedInput = validateInput(e.value, validation[e.name]);

      dispatch({type: "INPUT_CHANGE", payload: {name: e.name, value: validatedInput.value}})

      if (e.name === "qty")
        dispatch({type: "INPUT_CHANGE", payload: {name: "summary", value: validatedInput.value * 700}})

      dispatch(validate(validation, e.name))
  }
}

export function validate(validation, activeKey = ""){
  return function(dispatch, getState){
      let formData = getState().ticket.inputs

      let error = {};

      for (const key of Object.keys(formData)) {
        let active = activeKey === key ? true : false;

        let validatedInput = validateInput(formData[key], validation[key], active);

        if (validatedInput.error !== false)
          error[key] = validatedInput.error;
      }

      if (isEmptyObject(error)){
        dispatch({type: "VALIDATION_PASSED", payload: {error: error}})
      } else {
        dispatch({type: "VALIDATION_FAILED", payload: {error: error}})
      }
  }
}

export function submit(validation){
  return function(dispatch, getState){
    let validated = getState().ticket.validated;

    if (validated){
      dispatch({type: "SUBMISSION_STARTED"})
      axios.post("http://localhost:7235/data/ticket/new-ticket", getState().ticket.inputs)
        .then((response) => {
          console.log("response", response)
          dispatch({type: "SUBMISSION_SUCCESS", payload: response})
        })
        .catch((err) => {
          console.log("err", err)
          dispatch({type: "SUBMISSION_FAILED", payload: err})
      })
    }

  }
}
