import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchRockets from '../modules/rocketsAPI';

const GET_ROCKETS = './rockets/getRockets/GET_ROCKETS';

export const getRockets = createAsyncThunk(GET_ROCKETS,
  async () => {
    const response = await fetchRockets();
    return response;
  });

const slice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    reserveRocket(rockets, action) {
      /* eslint-disable no-param-reassign */
      const id = rockets.findIndex(((rocket) => (rocket.id === action.payload.id)));
      rockets[id].reserved = true;
    },
    cancelReservation(rockets, action) {
      /* eslint-disable no-param-reassign */
      const id = rockets.findIndex(((rocket) => (rocket.id === action.payload.id)));
      rockets[id].reserved = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});

export const { reserveRocket, cancelReservation } = slice.actions;
export default slice.reducer;
