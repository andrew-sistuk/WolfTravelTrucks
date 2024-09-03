import { configureStore } from '@reduxjs/toolkit';
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   persistStore,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from 'redux-persist';
import campersSlice from './campers/slice';
import camperSlice from './camper/slice';

export const appState = configureStore({
  reducer: {
    campers: campersSlice,
    camper: camperSlice,

    // filters: filtersSlice,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(appState);
