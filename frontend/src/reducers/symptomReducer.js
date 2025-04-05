const initialState = {
    symptoms: [],
    error: null,
  };
  
  const symptomReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_SYMPTOMS_SUCCESS':
        return { ...state, symptoms: action.payload };
      case 'FETCH_SYMPTOMS_FAILURE':
        return { ...state, error: action.payload };
      // Add other cases
      default:
        return state;
    }
  };