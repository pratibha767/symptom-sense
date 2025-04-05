import axios from 'axios';

export const fetchSymptoms = (filters) => async (dispatch) => {
  try {
    const response = await axios.get('/symptoms', { params: filters });
    dispatch({ type: 'FETCH_SYMPTOMS_SUCCESS', payload: response.data });
  } catch (err) {
    dispatch({ type: 'FETCH_SYMPTOMS_FAILURE', payload: err.message });
  }
};

// Add other symptom-related actions here