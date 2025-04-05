const initialState = {
    token: null,
    user: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, token: action.payload.token };
      case 'LOGIN_FAILURE':
        return { ...state, error: action.payload };
      // Add other cases
      default:
        return state;
    }
  };
  
  export default authReducer;