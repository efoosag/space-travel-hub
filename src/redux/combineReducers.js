import { combineReducers } from '@reduxjs/toolkit';
import RocketReducer from './rockets';
import MissionReducer from './missions';

const reducers = combineReducers({
  rockets: RocketReducer,
  missions: MissionReducer,
});

export default reducers;
