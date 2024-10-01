import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: {},
  },
  reducers: {
    toggleFavorite: (state, action) => {
      state.favorites[action.payload] = !state.favorites[action.payload];
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
