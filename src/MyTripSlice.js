import { createSlice } from '@reduxjs/toolkit';
import { loadingCompleted } from './loadingSlice';

// Define the trips slice with initial state and reducers
export const tripsSlice = createSlice({
  name: 'trips',
  initialState: {
    value: [],
  },
  reducers: {
    // Update the trips state with the new list of trips
    updateTrips: (state, action) => {
      state.value = action.payload;
    }
  },
  // Handle the loadingCompleted action to update trips when loading is completed
  // Extra reducers allow us to respond to actions defined outside of this slice
  extraReducers: (builder) => {
    builder.addCase(loadingCompleted, (state, action) => {
        state.value = action.payload;
    })
  }
});

// Sample selector to get trips from the state
export const selectTrips = (state) => state.trips.value

// Action creators are generated for each case reducer function
export const { updateTrips } = tripsSlice.actions;