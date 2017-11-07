import axios from 'axios';

import { REMOTE_URL } from '../config/app';
axios.defaults.withCredentials = false;
export function getTickets(e){
  return function(dispatch, getState){
      // dispatch({type: "FETCHING_TICKETS_STARTED"})
      // request.get(REMOTE_URL + "/data/ticket/")
      //   .then((response) => {
      //     dispatch({type: "FETCHING_TICKETS_SUCCESS", payload: response.data})
      //   })
      //   .catch((err) => {
      //     dispatch({type: "FETCHING_TICKETS_FAILED", payload: err.data})
      // })
  }
}

const transaction_data = {
  "POSKey": "347f7d78b1914a8ba9c86f2533e27e49",
  "PaymentType": "Immediate",
  "GuestCheckOut": true,
  "FundingSources": ["All"],
  "PaymentRequestId": "ajjjdeee",
  "Locale": "hu-HU",
  "Currency": "HUF",
  "Transactions": [{
      "POSTransactionId": "ezatranzakcioid",
      "Payee": "mobiljeg@gmail.com",
      "Total": 2000,
      "Items": [{
        "Name": "adsasd",
        "Description": "adsasd",
        "Quantity": 1,
        "Unit": "darab",
        "ItemTotal": 100
      }]
  }]
}

export function barionPay(e){
  return function(dispatch, getState){
    let fetchData = {
        method: 'POST',
        body: JSON.stringify(transaction_data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
    }

    fetch("https://api.test.barion.com/v2/Payment/Start/", fetchData)
    .then(function(response) {
      console.log(response)
        // Handle response you get from the server
    }).catch((err) => {
        console.log(err)
    });
      // dispatch({type: "FETCHING_TICKETS_STARTED"})
      // axios.post("", transaction_data)
      //   .then((response) => {
      //     console.log(response)
      //   })
      //   .catch((err) => {
      //     console.log(err)
      // })
  }
}
