import { createSlice } from '@reduxjs/toolkit';
import { loadingCompleted } from './loadingSlice';

export const tripsSlice = createSlice({
  name: 'trips',
  initialState: {
    value: [],
  },
  reducers: {
    addTrip: (state, action) => {
      state.value = [...state.value, {
        destination: action.payload,
        completed: false,
        date: new Date().toISOString()
      }];
    },
    
    markTripCompleted: (state, action) => {
      const trip = state.value.find(t => t.id === action.payload);
      if (trip) { 
        trip.completed = true;
      }
    },

    deleteTrip: (state, action) => {
      state.value = state.value.filter(t => t.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadingCompleted, (state, action) => {
        state.value = action.payload;
    })
  }
})

export const selectTrips = (state) => state.trips.value

export const { addTrip, markTripCompleted, deleteTrip } = tripsSlice.actions;