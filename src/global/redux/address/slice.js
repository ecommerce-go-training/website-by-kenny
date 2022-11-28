import { createSlice, current } from '@reduxjs/toolkit';

import { getAddress, addAddress, editAddress, deleteAddress } from './thunk';

const initialState = {
  userAddress: [],
  isLoading  : false,
  fetched    : false,
};

const addressSlice = createSlice({
  name        : 'address',
  initialState: initialState,
  reducers    : {
    clearAddress: (state) => {
      state.userAddress = [];
      state.fetched = false;
    },
  },
  extraReducers: {
    [getAddress.pending]: (state) => {
      state.isLoading = true;
    },
    [getAddress.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userAddress = action?.payload?.data;
      state.fetched = true;
    },
    [getAddress.rejected]: (state) => {
      state.isLoading = false;
    },
    [addAddress.pending]: (state) => {
      state.isLoading = true;
    },
    [addAddress.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userAddress = [...state.userAddress, action?.payload?.data];
    },
    [addAddress.rejected]: (state) => {
      state.isLoading = false;
    },
    [editAddress.pending]: (state) => {
      state.isLoading = true;
    },
    [editAddress.fulfilled]: (state, action) => {
      state.isLoading = false;
      const newState = current(state.userAddress).map((item, index) => {
        return index === action?.payload?.index
          ? action?.payload?.data?.data
          : item;
      });
      state.userAddress = [...newState];
    },
    [editAddress.rejected]: (state) => {
      state.isLoading = false;
    },
    [deleteAddress.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteAddress.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userAddress = current(state.userAddress).filter(
        (item) => item.id !== action?.payload?.id
      );
    },
    [deleteAddress.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearAddress } = addressSlice.actions;
export default addressSlice.reducer;
