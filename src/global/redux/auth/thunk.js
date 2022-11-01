import { createAsyncThunk } from '@reduxjs/toolkit';
import { showNoti } from 'utils/helpers';

import { saveLoginToken, modifyLocalStorage } from 'utils/helpers';
import { registerUser, loginUser } from './requestv2';

const registerAccount = createAsyncThunk('auth/register', async (data) => {
  try {
    const res = await registerUser(data);
    showNoti('success', 'Register Success');
    return {
      status: true,
      data  : res.data,
    };
  } catch (error) {
    return {
      status: false,
    };
  }
});

const loginAccount = createAsyncThunk('auth/login', async (data) => {
  try {
    const res = await loginUser(data);
    modifyLocalStorage('setItem', 'isLogin', true);
    saveLoginToken(res?.data?.accessToken);
    return {
      status: true,
      data  : res.data,
    };
  } catch (error) {
    return {
      status: false,
    };
  }
});

export { loginAccount, registerAccount };
