import { configureStore } from '@reduxjs/toolkit'; // import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   persistStore,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from 'myRedux-persist';
import campersSlice from './campers/slice';

export const appState = configureStore({
  reducer: {
    campers: campersSlice,
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
