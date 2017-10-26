import axios from "axios";

export function buyTicket(data){
  return function(dispatch){
    axios.get("http://rest.learncode.academy/api/test123/tweets")
      .then((response) => {
        dispatch({type: "BUY_TICKET_FULFILLED", payload: data})
      })
      .catch((err) => {
        dispatch({type: "BUY_TICKET_REJECTED", payload: err})
      })
    }
  }
