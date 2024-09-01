import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';

export const selectNameFilter = state => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (items, filterName) =>
    items.filter(
      item =>
        item.name.toLowerCase().includes(filterName.toLowerCase().trim()) ||
        item.number.includes(filterName.toLowerCase().trim())
    )
);
