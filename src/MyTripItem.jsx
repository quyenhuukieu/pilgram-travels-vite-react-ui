

export default function MyTripItem({ trip, onCompletedClicked, onDeleteClicked  }) {
    return (
        <div className="my-trip-item">
            <h3>{trip.text} - {trip.Date}</h3>
            {trip.isCompleted && <p className="completed">Completed</p>}
            {trip.isCompleted
                ? <button onClick={() => onDeleteClicked(trip.text)}>Delete Trip</button>
                : <button onClick={() => onCompletedClicked(trip.text)}>Mark as Completed</button>}
        </div>
    );
}