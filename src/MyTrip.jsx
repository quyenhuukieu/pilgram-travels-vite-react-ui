import MyTripItem from './MyTripItem'
import NewTripForm from './NewTripForm'

export default function MyTrip({ completedTrips, incompleteTrips }) {
    return (
        <div>
            <h1>My Trips</h1>
            
            <NewTripForm />

            <h3>Completed Trips:</h3>
            {completedTrips.map((trip, index) => (
                <MyTripItem key={index} trip={trip} />
            ))}

            <h3>Incomplete Trips:</h3>
            {incompleteTrips.map((trip, index) => (
                <MyTripItem key={index} trip={trip} />
            ))}
            
        </div>
    )
}