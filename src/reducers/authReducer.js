const initialState = {
  isAuthenticated: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
      case 'AUTH_SUCCESS':
        return { ...state, isAuthenticated: true }
      case 'AUTH_FAIL':
          return { ...state, isAuthenticated: false }
      default:
          return { ...state };
  }
};
