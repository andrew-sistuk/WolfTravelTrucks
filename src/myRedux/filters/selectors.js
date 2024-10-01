import { createSelector } from '@reduxjs/toolkit';
import { selectCampers } from '../campers/selectors';

export const selectFilterType = state => state.filters.type;
export const selectFilterEquipments = state => state.filters.equipments;
export const selectFilterLocations = state => state.filters.locations;

export const selectFilteredCampers = createSelector(
  [
    selectCampers,
    selectFilterType,
    selectFilterEquipments,
    selectFilterLocations,
  ],
  (items, type, equipments, locations) =>
    items.filter(
      item => item.form.toLowerCase().includes(type.toLowerCase().trim())
      //   &&
      // isLocation(item, locations)
    )
);
