import { createSlice } from '@reduxjs/toolkit';
import { fetchCamper, fetchCampers } from './operations';
import addId from '../../helpers/addId.js';
import ownPropertyList from '../../helpers/ownProperty.js';
import { nanoid } from 'nanoid';

const emptyItem = {
  gallery: [],
  reviews: [],
};

const emptyModal = {
  isOpen: false,
  type: 'photo',
  photo: null,
};

const emptyFilters = {
  equipments: [],
  locations: [],
  types: [],
};

const handlePending = state => {
  state.loading = true;
  state.item = emptyItem;
  state.modal = emptyModal;
  state.filters = emptyFilters;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
  state.item = emptyItem;
  state.modal = emptyModal;
  state.filters = emptyFilters;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    item: emptyItem,
    modal: emptyModal,
    filters: emptyFilters,
    loading: false,
    error: null,
  },
  reducers: {
    toggleModal: (state, action) => {
      state.modal = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const tempItems = action.payload;
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

export const { toggleModal } = campersSlice.actions;

export default campersSlice.reducer;
