import { createAsyncThunk } from '@reduxjs/toolkit';

import { verifyCoupon } from './request';

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

export { verifyUserCoupon };
