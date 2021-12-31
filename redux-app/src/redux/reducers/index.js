import { combineReducers } from 'redux';

import apiReducer from './apiReducer';
import navReducer from './navReducer';

export default combineReducers({ navReducer, apiReducer });
