import request from '../utils/request';
import { REMOTE_URL } from '../config/app';

export function getTickets(e){
  return function(dispatch, getState){
      dispatch({type: "FETCHING_TICKETS_STARTED"})
      request.get(REMOTE_URL + "/data/ticket/")
        .then((response) => {
          dispatch({type: "FETCHING_TICKETS_SUCCESS", payload: response.data})
        })
        .catch((err) => {
          dispatch({type: "FETCHING_TICKETS_FAILED", payload: err.data})
      })
  }
}
