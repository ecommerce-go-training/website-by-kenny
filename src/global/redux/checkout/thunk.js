import { createAsyncThunk } from '@reduxjs/toolkit';

import { verifyCoupon, getInvoices, createInvoice } from './request';

const verifyUserCoupon = createAsyncThunk(
  'checkout/verify-coupon',
  async (code) => {
    const res = await verifyCoupon({ code });

    return {
      status: true,
      data  : res,
    };
  }
);

const getUserInvoices = createAsyncThunk(
  'checkout/get-user-invoices',
  async () => {
    const res = await getInvoices();
    return {
      status: true,
      data  : res,
    };
  }
);

const createBillInvoice = createAsyncThunk(
  'checkout/create-invoice',
  async (data) => {
    const res = await createInvoice(data);
    return {
      status: true,
      data  : res,
    };
  }
);

export { createBillInvoice, getUserInvoices, verifyUserCoupon };
