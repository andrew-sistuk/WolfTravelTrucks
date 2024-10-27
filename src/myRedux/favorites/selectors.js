import { createSelector } from '@reduxjs/toolkit';
import { selectCampers } from '../campers/selectors';

export const selectFavorites = state => state.favorites.favorites;

export const selectFavoritesCampers = createSelector(
  [selectCampers, selectFavorites],
  (campers, favorites) => {
    return campers.filter(camper => favorites[camper.id]);
  }
);
