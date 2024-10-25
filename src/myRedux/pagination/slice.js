import { createSlice } from '@reduxjs/toolkit';
import perPage from '../../helpers/constants/perPage.js';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: { perPage },
  reducers: {
    paginationPage(state) {
      state.perPage += perPage;
    },
    defaultPerPage(state) {
      state.perPage = perPage;
    },
  },
});

export const { paginationPage, defaultPerPage } = paginationSlice.actions;

export default paginationSlice.reducer;
