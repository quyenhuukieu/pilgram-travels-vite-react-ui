import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadTrips } from './thunks';
import './App.css';
import MyTrip from './MyTrip';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadTrips());
  } , []);
  
  return (
    <>
    <MyTrip />
    </>
  );
}

export default App
