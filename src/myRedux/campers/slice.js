import { createSlice } from '@reduxjs/toolkit';
import { fetchCamper, fetchCampers } from './operations';
import { addId, ownPropertyList } from 'helpers';
import { nanoid } from 'nanoid';

const emptyItem = {
  gallery: [],
  reviews: [],
};

const emptyFilters = {
  equipments: [],
  locations: [],
  types: [],
};

const defaultProperties = state => {
  state.items = [];
  state.item = emptyItem;
  state.filters = emptyFilters;
};

const handlePending = state => {
  state.loading = true;
  defaultProperties(state);
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.loading = false;
  defaultProperties(state);
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    item: emptyItem,
    filters: emptyFilters,
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const tempItems = action.payload.items;
        let tempObjWithFullProperties = {};
        let tempTypes = [];

        for (let item of tempItems) {
          tempTypes.push(item.form);
          tempObjWithFullProperties = { ...tempObjWithFullProperties, ...item };
          if (
            !state.filters.locations.some(
              location => location.label === item.location
            )
          ) {
            state.filters.locations.push({
              value: item.location.replace(', ', '_').toLowerCase(),
              label: item.location,
            });
          }
        }

        state.filters.equipments = ownPropertyList(
          tempObjWithFullProperties,
          'equipment_filter'
        );

        state.filters.types = tempTypes.reduce(
          (accumulator, currentValue, index, array) => {
            if (array.indexOf(currentValue) === index) {
              accumulator.push([nanoid(), currentValue]);
            }
            return accumulator;
          },
          []
        );

        state.items = tempItems;
      })
      .addCase(fetchCampers.rejected, handleRejected)

      .addCase(fetchCamper.pending, handlePending)
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.item = {
          ...action.payload,
          gallery: addId(action.payload.gallery),
          reviews: addId(action.payload.reviews),
        };
      })
      .addCase(fetchCamper.rejected, handleRejected);
  },
});

export default campersSlice.reducer;
