import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    filterContacts(state, action) {
      console.log(action.payload);
      state.name = action.payload;
    },
  },
});

export const { filterContacts } = filtersSlice.actions;

export default filtersSlice.reducer;
