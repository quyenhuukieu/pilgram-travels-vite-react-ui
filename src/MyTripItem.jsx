import { useDispatch } from 'react-redux';
import { markTripCompleted, deleteTrip } from './MyTripSlice.js';

export default function MyTripItem({ trip }) {
    const dispatch = useDispatch();

    return (
        <div className="my-trip-item">
            <h3>{trip.destination} - {trip.date}</h3>
            {trip.completed && <p className="completed">Completed</p>}
            {trip.completed
                ? <button onClick={() => dispatch(deleteTrip(trip.id))}>Delete Trip</button>
                : <button onClick={() => dispatch(markTripCompleted(trip.id))}>Mark as Completed</button>}
        </div>
    );
}