import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { equipments: [], locations: [], type: '' },
  reducers: {
    filterCampers(state, action) {
      state.equipments = action.payload.equipments;
      state.locations = action.payload.location;
      state.type = action.payload.type;
    },
  },
});

export const { filterCampers } = filtersSlice.actions;

export default filtersSlice.reducer;
