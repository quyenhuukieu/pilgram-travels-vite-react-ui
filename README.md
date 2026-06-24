# Pilgram Travels UI

Frontend for managing a user's travel itineraries. This app lists completed and incomplete trips, lets users add a trip, and supports marking trips completed or deleting completed trips.

## Tech stack

- React 19 + Vite 8
- Redux Toolkit + React Redux
- Axios
- styled-components

## Prerequisites

- Node.js 20+ (or current LTS)
- npm
- Pilgram Travels backend running at `http://localhost:8080`

The Vite dev server proxies `/api/*` to `http://localhost:8080` (configured in `vite.config.ts`).

## Getting started

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal (typically `http://localhost:5173`).

## Available scripts

- `npm run dev` - Start the development server
- `npm run build` - Type-check and build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## API usage

The app currently uses a fixed user id (`userId: 1`) and calls:

- `GET /api/itineraries/user/1`
- `POST /api/itineraries`
- `PUT /api/itineraries/:id`
- `DELETE /api/itineraries/:id`

## Project structure

```text
src/
  App.tsx            # App bootstrap and initial trip loading
  main.tsx           # Redux store + React root
  MyTrip.jsx         # Main trip list view
  MyTripItem.jsx     # Per-trip actions (complete/delete)
  NewTripForm.jsx    # Trip creation form
  MyTripSlice.js     # Trip state slice
  loadingSlice.js    # Loading state slice
  selectors.js       # Derived trip selectors
  thunks.js          # Async API actions
```
