import { createAsyncThunk } from '@reduxjs/toolkit';
import { showNoti } from 'utils/helpers';

import { saveLoginToken, modifyLocalStorage } from 'utils/helpers';
import {
  registerUser,
  loginUser,
  sendVerifyCodeToMail,
  checkVerifyCode,
  resetPassword,
} from './requestv2';

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

const sendCode = createAsyncThunk('auth/send-code', async (data) => {
  try {
    const res = await sendVerifyCodeToMail(data.email);
    data.function((prev) => prev + 1);
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

const verifyCode = createAsyncThunk('auth/check-code', async (data) => {
  try {
    const res = await checkVerifyCode(data);
    data.function((prev) => prev + 1);
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

const changePassword = createAsyncThunk('auth/reset-password', async (data) => {
  try {
    console.log(data);
    const res = await resetPassword(data);
    data.function((prev) => prev + 1);
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

export { changePassword, loginAccount, registerAccount, sendCode, verifyCode };
