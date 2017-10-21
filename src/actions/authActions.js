import axios from "axios";

export function authenticate(){
  return function(dispatch){
    axios.get("http://rest.learncode.academy/api/test123/tweets")
      .then((response) => {
        dispatch({type: "AUTH_SUCCESS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "AUTH_FAIL", payload: err})
      })
    }
  }
