import axios from "axios";

export function authenticate(data){
  return function(dispatch){
    console.log(data)
    axios.get("http://rest.learncode.academy/api/test123/tweets")
      .then((response) => {
        dispatch({type: "AUTH_SUCCESS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "AUTH_FAIL", payload: err})
      })
    }
  }
