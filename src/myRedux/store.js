import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import campersSlice from './campers/slice';
import filtersSlice from './filters/slice.js';
import favoritesSlice from './favorites/slice.js';
import paginationSlice from './pagination/slice.js';

const favoritesConfig = {
  key: 'favorites',
  storage,
};

const favoritesReducer = persistReducer(favoritesConfig, favoritesSlice);

export const appState = configureStore({
  reducer: {
    campers: campersSlice,
    filters: filtersSlice,
    favorites: favoritesReducer,
    pagination: paginationSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(appState);
