import { createSlice } from '@reduxjs/toolkit';
import { fetchCamper, fetchCampers } from './operations';
import addId from '../../helpers/addId.js';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
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
        state.items = action.payload;
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
