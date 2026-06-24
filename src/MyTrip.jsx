import { useSelector } from 'react-redux'
import MyTripItem from './MyTripItem'
import NewTripForm from './NewTripForm'
import { getCompletedTrips, getIncompleteTrips, getLoadingState } from './selectors'

export default function MyTrip() {
    const tripsAreLoading = useSelector(getLoadingState);
    const completedTrips = useSelector(getCompletedTrips);
    const incompleteTrips = useSelector(getIncompleteTrips);

    return (
        <div>
            <h1>My Trips</h1>
            
            <NewTripForm  />
            {tripsAreLoading
                ? <p>Loading...</p>
                : (
                    <>
                    <h3>Completed Trips:</h3>
                    {completedTrips.map((trip) => (
                        <MyTripItem key={trip.id} trip={trip} />
                    ))}

                    <h3>Incomplete Trips:</h3>
                    {incompleteTrips.map((trip) => (
                        <MyTripItem key={trip.id} trip={trip} />
                    ))}
                    </>
                )}

        </div>
    )
}