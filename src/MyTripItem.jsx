import { useDispatch } from 'react-redux';
import { markTripCompleted, deleteTrip } from './thunks.js';
import styled from 'styled-components';

const CardContainer = styled.div`
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    padding: 16px;
`;

export default function MyTripItem({ trip }) {
    const dispatch = useDispatch();

    return (
        <CardContainer className="my-trip-item">
            <h3>{trip.destination} - {trip.date}</h3>
            {trip.completed && <p className="completed">Completed</p>}
            {trip.completed
                ? <button onClick={() => dispatch(deleteTrip(trip.id))}>Delete Trip</button>
                : <button onClick={() => dispatch(markTripCompleted(trip))}>Mark as Completed</button>}
        </CardContainer>
    );
}