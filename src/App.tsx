import {useState} from 'react'

import './App.css'
import MyTrip from './MyTrip'

function App() {
  const [completedTrips, setCompletedTrips] = useState([
    { text: 'Trip to Paris, France', Date:'2016-06', isCompleted: true },
    { text: 'Trip to Bern, Switzerland', Date:'2016-07', isCompleted: true }
  ]);

  const [incompleteTrips, setIncompleteTrips] = useState([
    { text: 'Trip to Fatima, Portugal', Date: '2016-07', isCompleted: false },
    { text: 'Trip to Rome, Italy', Date: '2016-07', isCompleted: false }
  ]);
  
  return (
    <>
    <MyTrip completedTrips={completedTrips} incompleteTrips={incompleteTrips} />
    </>
  );
}

export default App
