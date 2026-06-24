import { getCompletedTrips } from "./selectors.js";

function testCompletedTripsSelector() {
    const fakeState = {
        trips: {
            value: [
                { id: 1, destination: "Trip 1", completed: true },
                { id: 2, destination: "Trip 2", completed: false },
            ]
        }
    }

    const result = getCompletedTrips(fakeState);
    if (result.length !== 1 || result[0].id !== 1) {
        throw new Error('getCompletedTrips failed!');
    } else {
        console.log('getCompletedTrips passed.');
    }
}

testCompletedTripsSelector();