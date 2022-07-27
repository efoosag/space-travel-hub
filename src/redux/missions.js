/* eslint-disable comma-dangle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchMissions from '../modules/missionsAPI';

const GET_MISSIONS = './missions/getMissions/GET_MISSIONS';

export const getMissions = createAsyncThunk(GET_MISSIONS, async () => {
  const response = await fetchMissions();
  return response;
});

const slice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    joinMission(missions, action) {
      /* eslint-disable no-param-reassign */
      const id = missions.findIndex(
        (mission) => mission.id === action.payload.id
      );
      missions[id].joined = true;
    },
    leaveMission(missions, action) {
      /* eslint-disable no-param-reassign */
      const id = missions.findIndex(
        (mission) => mission.id === action.payload.id
      );
      missions[id].joined = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});

export const { joinMission, leaveMission } = slice.actions;
export default slice.reducer;
