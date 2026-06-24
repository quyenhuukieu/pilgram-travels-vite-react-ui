import axios from 'axios';
import {
    loadingStarted,
    loadingCompleted,
    loadingFailed,
} from './loadingSlice';
import { updateTrips } from './MyTripSlice';

// Thunk to load trips from the API
// A thunk is a function that returns another function, allowing for asynchronous actions in Redux
export const loadTrips = () => async (dispatch) => {
    dispatch(loadingStarted());
    try {
        const response = await axios.get('/api/itineraries/user/1');
        const trips = response.data;
        console.log(trips);
        dispatch(loadingCompleted(trips));
    } catch (e) {
        dispatch(loadingFailed(e));
    }
}

// Thunk to create a new trip
// A thunk is a function that returns another function, allowing for asynchronous actions in Redux
export const createTrip = (newTripData) => async (dispatch, getState) => {
    try {
        const response = await axios.post('/api/itineraries', newTripData);
        const newTrip = response.data;
        const updatedTrips = getState().trips.value.concat(newTrip);
        dispatch(updateTrips(updatedTrips));
    } catch (e) {
        console.error('Failed to create trip:', e);
    }
}

// Thunk to delete a trip
// A thunk is a function that returns another function, allowing for asynchronous actions in Redux
export const deleteTrip = (tripId) => async (dispatch, getState) => {
    try {
        await axios.delete('/api/itineraries/' + tripId);
        const updatedTrips = getState().trips.value.filter(t => t.id !== tripId);
        dispatch(updateTrips(updatedTrips));
    } catch (e) {
        console.error('Failed to delete trip:', e);
    }
}

// Thunk to mark a trip as completed
// A thunk is a function that returns another function, allowing for asynchronous actions in Redux
export const markTripCompleted = (trip) => async (dispatch, getState) => {
    try {
        const updatedTrip = { ...trip, completed: true };
        const response = await axios.put('/api/itineraries/' + updatedTrip.id, updatedTrip);
        const tripMarkedCompleted = response.data;
        const updatedTrips = getState().trips.value.map(
            t => t.id === updatedTrip.id ? tripMarkedCompleted : t);
        dispatch(updateTrips(updatedTrips));
    } catch (e) {
        console.error('Failed to mark trip completed:', e);
    }
}