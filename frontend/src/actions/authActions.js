import axios from 'axios';

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/auth/register', userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
  } catch (err) {
    dispatch({ type: 'REGISTER_FAILURE', payload: err.message });
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/auth/login', userData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (err) {
    dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
  }
};