import { createSlice } from '@reduxjs/toolkit';

import { imageGenerator } from 'utils/helpers';

import { verifyUserCoupon, getUserInvoices, createBillInvoice } from './thunk';

const initialState = {
  couponInfo       : [],
  invoiceInfo      : [],
  isLoadingDiscount: false,
  isLoadingCheckout: false,
  fetched          : false,
};

const checkoutSlice = createSlice({
  name         : 'checkout',
  initialState : initialState,
  reducers     : {},
  extraReducers: {
    [verifyUserCoupon.pending]: (state) => {
      state.isLoadingDiscount = true;
    },
    [verifyUserCoupon.fulfilled]: (state, action) => {
      state.isLoadingDiscount = false;
      state.couponInfo = action.payload;
    },
    [verifyUserCoupon.rejected]: (state) => {
      state.isLoadingDiscount = false;
    },
    [getUserInvoices.pending]: (state) => {
      state.isLoadingCheckout = true;
    },
    // [getUserInvoices.fulfilled]: (state, action) => {
    //   state.isLoadingCheckout = false;
    //   state.fetched = true;
    //   state.invoiceInfo = [...action.payload.data];
    // },
    [getUserInvoices.fulfilled]: (state, action) => {
      state.isLoadingCheckout = false;
      state.fetched = true;
      state.invoiceInfo = action.payload.data.map((item) => {
        return {
          ...item,
          detailInvoiceItems: item.detailInvoiceItems.map((invent) => {
            return {
              ...invent,
              image: imageGenerator(),
            };
          }),
        };
      });
    },
    [getUserInvoices.rejected]: (state) => {
      state.isLoadingCheckout = false;
    },
    [createBillInvoice.pending]: (state) => {
      state.isLoadingCheckout = true;
    },
    [createBillInvoice.fulfilled]: (state) => {
      state.isLoadingCheckout = false;
    },
    [createBillInvoice.rejected]: (state) => {
      state.isLoadingCheckout = false;
    },
  },
});

export default checkoutSlice.reducer;
