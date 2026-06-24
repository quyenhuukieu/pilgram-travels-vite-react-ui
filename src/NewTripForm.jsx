import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTrip } from './thunks';

// NewTripForm component allows users to create a new trip by entering destination and date
export default function NewTripForm ({ onCreateClicked }) {
    // useDispatch hook provides a way to dispatch actions to the Redux store
    const dispatch = useDispatch();

    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');

    const handleCreateTrip = () => {
        console.log('Creating trip with destination:', destination, 'and date:', date);
        const newTripData = {
            userId: 1,
            destination: destination,
            date: date,
            completed: false
        }; 
        dispatch(createTrip(newTripData));
        setDestination('');
        setDate('');
    };

    return (
        <div className="new-trip-form">
            <h2>Add a New Trip</h2>

            <input
                type="text"
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)} />

            <input
                type="date"
                value={date}
                onChange={(e) =>
                    setDate(e.target.value)
                } />

            <button onClick={handleCreateTrip}>
                Create Trip
            </button>
        </div>
    );
}