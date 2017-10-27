import update from 'immutability-helper';

const initialState = {
  tickets: [],
  loading: false,
  success: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case "FETCHING_TICKETS_SUCCESS": {
      return update(state, {
        tickets: {$set: action.payload},
        success: {$set: true},
        loading: {$set: false}
      });
    }

    default: {
      return {...state}
    }

  }
};
