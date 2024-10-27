import { createSlice } from '@reduxjs/toolkit';
import { PER_PAGE } from 'helpers';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: { perPage: PER_PAGE },
  reducers: {
    paginationPage(state) {
      state.perPage += PER_PAGE;
    },
    defaultPerPage(state) {
      state.perPage = PER_PAGE;
    },
  },
});

export const { paginationPage, defaultPerPage } = paginationSlice.actions;

export default paginationSlice.reducer;
