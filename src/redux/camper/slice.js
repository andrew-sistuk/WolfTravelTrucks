import { createSlice } from '@reduxjs/toolkit';
import { fetchCamper } from './operations';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const camperSlice = createSlice({
  name: 'camper',
  initialState: {
    item: {},
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCamper.pending, handlePending)
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.item = action.payload;
      })
      .addCase(fetchCamper.rejected, handleRejected);
  },
});

export default camperSlice.reducer;
