// import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import ReducerRocket from './rockets/rockets';

// const reducer = {
//   rockets: ReducerRocket,
// };

// const store = configureStore({ reducer }, applyMiddleware(thunk));

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from './reducer';

const store = configureStore({
  reducer,
  middlewares: [logger],
});

export default store;
