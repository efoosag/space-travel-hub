import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import ReducerRocket from './rockets/rockets';

const reducer = {
  rockets: ReducerRocket,
};

const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
