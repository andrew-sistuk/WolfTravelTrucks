import { createSlice } from '@reduxjs/toolkit';
import { fetchCamper, fetchCampers } from './operations';
import addId from '../../helpers/addId.js';
import ownPropertyList from '../../helpers/ownProperty.js';

const handlePending = state => {
  state.loading = true;
  state.item = {
    gallery: [],
    reviews: [],
  };
  state.modal = {
    isOpen: false,
    type: 'photo',
    photo: null,
  };
  state.filters = {
    equipment: [],
    locations: [],
  };
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
  state.item = {
    gallery: [],
    reviews: [],
  };
  state.modal = {
    isOpen: false,
    type: 'photo',
    photo: null,
  };
  state.filters = {
    equipment: [],
    locations: [],
  };
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    item: {
      gallery: [],
      reviews: [],
    },
    modal: {
      isOpen: false,
      type: 'photo',
      photo: null,
    },
    filters: {
      equipment: [],
      locations: [],
    },
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

        for (let item of tempItems) {
          tempObjWithFullProperties = { ...tempObjWithFullProperties, ...item };
          if (
            !state.filters.locations.some(
              location => location.label === item.location
            )
          ) {
            state.filters.locations.push({
              value: item.location
                .replace(/ /g, '_')
                .replace(',', '')
                .toLowerCase(),
              label: item.location,
            });
          }
        }

        state.filters.equipment = ownPropertyList(
          tempObjWithFullProperties,
          'equipment_filter'
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
