import { createSelector } from '@reduxjs/toolkit';
import { selectFilteredCampers } from '../filters/selectors';

export const selectPerPage = state => state.pagination.perPage;

export const selectFilteredAndPaginationCampers = createSelector(
  [selectFilteredCampers, selectPerPage],
  (items, perPage) => {
    const perPageItems = [];
    // const perPageItems = items;
    // perPageItems.length = perPage;
    for (let i = 0; i < items.length; i++) {
      if (i >= perPage) break;
      perPageItems.push(items[i]);
    }
    return perPageItems;
  }
);
