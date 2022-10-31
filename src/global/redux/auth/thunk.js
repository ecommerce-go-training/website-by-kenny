import { createAsyncThunk } from '@reduxjs/toolkit';
import { showNoti } from 'utils/helpers';

import { registerUser } from './requestv2';

const register = createAsyncThunk('user/register', async (data, reset) => {
  try {
    const response = await registerUser(data);
    reset();
    showNoti('success', 'Register Success');
    return response;
  } catch (error) {
    showNoti('error', error.data.message);
  }
});

export { register };
