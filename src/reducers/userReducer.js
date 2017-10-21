const initialState = {
  user:{
    id: null,
    email: null,

  },
  fetching: false,
  fetched: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USER_FULFILLED": {
      return {...action.payload, fetching: true}
    }

    default: {
      return {...state}
    }

  }
};
