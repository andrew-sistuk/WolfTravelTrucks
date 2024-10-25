import { createSlice } from '@reduxjs/toolkit';
// import perPage from '../../helpers/constants/perPage.js';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { equipments: [], locations: [], type: '' },
  reducers: {
    filterCampers(state, action) {
      if (action.payload.equipments)
        state.equipments = action.payload.equipments;
      if (action.payload.location) state.locations = action.payload.location;
      state.type = action.payload.type;
    },
  },
});

export const { filterCampers } = filtersSlice.actions;

export default filtersSlice.reducer;
