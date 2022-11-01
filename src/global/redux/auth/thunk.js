import { createAsyncThunk } from '@reduxjs/toolkit';
import { showNoti } from 'utils/helpers';

import { saveLoginToken } from 'utils/helpers';
import { registerUser, loginUser } from './requestv2';

const registerAccount = createAsyncThunk('auth/register', async (data) => {
  try {
    const response = await registerUser(data);
    showNoti('success', 'Register Success');
    return response;
  } catch (error) {
    showNoti('error', error.data.message);
  }
});

const loginAccount = createAsyncThunk('auth/login', async (data) => {
  try {
    const response = await loginUser(data);
    localStorage.setItem('isLogin', true);
    saveLoginToken(response?.data?.accessToken);
    return response;
  } catch (error) {
    showNoti('error', error.data.message);
  }
});

export { loginAccount, registerAccount };
