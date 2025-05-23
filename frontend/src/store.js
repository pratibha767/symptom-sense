import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import symptomReducer from './reducers/symptomReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  symptom: symptomReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;