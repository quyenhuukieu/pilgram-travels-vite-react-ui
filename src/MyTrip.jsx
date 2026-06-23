import { useSelector } from 'react-redux'
import MyTripItem from './MyTripItem'
import NewTripForm from './NewTripForm'

export default function MyTrip() {
    const tripsAreLoading = useSelector(state => !state.loading.value.completed);
    const trips = useSelector(state => state.trips.value);

    const completedTrips = trips.filter((t) => t.completed);
    const incompleteTrips = trips.filter((t) => !t.completed);

    return (
        <div>
            <h1>My Trips</h1>
            
            <NewTripForm  />
            {tripsAreLoading
                ? <p>Loading...</p>
                : (
                    <>
                    <h3>Completed Trips:</h3>
                    {completedTrips.map((trip, index) => (
                        <MyTripItem key={index} trip={trip} />
                    ))}

                    <h3>Incomplete Trips:</h3>
                    {incompleteTrips.map((trip, index) => (
                        <MyTripItem key={index} trip={trip} />
                    ))}
                    </>
                )}

        </div>
    )
}