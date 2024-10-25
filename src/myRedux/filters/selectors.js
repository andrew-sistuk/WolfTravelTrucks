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
  (items, type, equipments, locations) => {
    return items.filter(
      item =>
        (type ? item.form.includes(type.trim()) : true) &&
        (locations.length
          ? locations.some(location => location.label.includes(item.location))
          : true) &&
        (equipments.length
          ? equipments.every(equipment => item[equipment])
          : true)
    );
  }
);

export const selectTotal = createSelector(
  [selectFilteredCampers],
  campers => campers.length
);
