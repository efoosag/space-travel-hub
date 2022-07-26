const url = 'https://api.spacexdata.com/v3/rockets';
const GET_ROCKETS = './rockets/rockets/GET_ROCKETS';

// initialize book
const initialState = [];

// Reducer
const ReducerRocket = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.rockets;

    default:
      return state;
  }
};

// Action Creators
export const getRockets = () => async (dispatch) => {
  const response = await fetch(url);
  const rockets = await response.json();
  console.log(rockets);
  dispatch({
    type: GET_ROCKETS,
    rockets,
  });
};

export default ReducerRocket;
