import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';


import apiReducer from './apiReducer';
import navReducer from './navReducer';

export default combineReducers({ navReducer, apiReducer, form });
