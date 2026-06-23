import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTrip } from './MyTripSlice.js';


export default function NewTripForm ({ onCreateClicked }) {

    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();

    return (
        <div className="new-trip-form">
            <h2>Add a New Trip</h2>

            <input type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)} />

            <button onClick={() => {
                dispatch(addTrip(inputText));
                setInputText('');
            }}>Create Trip</button>
        </div>
    );
}