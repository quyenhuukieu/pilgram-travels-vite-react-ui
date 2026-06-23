import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { tripsSlice } from './MyTripSlice.js'
import { loadingSlice } from './loadingSlice.js'
import './index.css'
import App from './App.tsx'

const store = configureStore({
  reducer: {
    trips: tripsSlice.reducer,
    loading: loadingSlice.reducer,
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
