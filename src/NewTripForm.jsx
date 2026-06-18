import { useState } from 'react';


export default function NewTripForm ({ onCreateClicked }) {

    const [inputText, setInputText] = useState('');

    return (
        <div className="new-trip-form">
            <h2>Add a New Trip</h2>

            <input type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)} />

            <button onClick={() => {
                onCreateClicked(inputText);
                setInputText('');
            
            }}>Create Trip</button>
        </div>
    );
}