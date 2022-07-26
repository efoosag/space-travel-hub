import { combineReducers } from '@reduxjs/toolkit';
import RocketReducer from './rockets';

const reducers = combineReducers({
  rockets: RocketReducer,
});

export default reducers;
