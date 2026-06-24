import { createSlice } from '@reduxjs/toolkit';
import { loadingCompleted } from './loadingSlice';

// Define the trips slice with initial state and reducers
export const tripsSlice = createSlice({
  name: 'trips',
  initialState: {
    value: [],
  },
  reducers: {
    // Mark a trip as completed by its ID
    markTripCompleted: (state, action) => {
      const trip = state.value.find(t => t.id === action.payload);
      if (trip) { 
        trip.completed = true;
      }
    },
    // Remove a trip from the state by its ID
    deleteTrip: (state, action) => {
      state.value = state.value.filter(t => t.id !== action.payload);
    },
    // Update the trips state with the new list of trips
    updateTrips: (state, action) => {
      console.log('Updating trips with payload:', action.payload);
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
export const { markTripCompleted, deleteTrip, updateTrips } = tripsSlice.actions;