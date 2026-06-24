import { createSlice } from '@reduxjs/toolkit'

// Define the loading slice with initial state and reducers
// The loading slice manages the loading state of the application, 
// indicating whether data is being loaded and whether the loading was successful.
export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        value: {
            completed: true,
            successful: false,
        },
    },
    // Define reducers to handle loading state changes
    reducers: {
        // Set loading state with completed as false when loading starts
        loadingStarted: (state) => {
            state.value.completed = false;
        },
        // Set loading state with completed as true and successful as true when 
        // loading completes successfully
        loadingCompleted: (state) => {
            state.value.completed = true;
            state.value.successful = true;
        },
        // Set loading state with completed as true and successful as false when loading fails
        loadingFailed: (state) => {
            state.value.completed = true;
            state.value.successful = false;
        }
    }
});

// Action creators are generated for each case reducer function
export const { loadingStarted, loadingCompleted, loadingFailed } = loadingSlice.actions;