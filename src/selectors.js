import { createSelector } from "@reduxjs/toolkit";

// Atomic selectors for trips and loading state
export const getTrips = state => state.trips.value;
export const getLoadingState = state => !state.loading.value.completed;

// Derived selectors for completed and incomplete trips
export const getCompletedTrips = createSelector([getTrips], trips => trips.filter(t => t.completed));
export const getIncompleteTrips = createSelector([getTrips], trips => trips.filter(t => !t.completed));