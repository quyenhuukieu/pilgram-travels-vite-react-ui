import axios from 'axios';
import {
    loadingStarted,
    loadingCompleted,
    loadingFailed,
} from './loadingSlice';

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