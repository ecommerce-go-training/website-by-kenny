import { createSlice } from '@reduxjs/toolkit';
import {
  registerAccount,
  loginAccount,
  sendCode,
  verifyCode,
  changePassword,
  getUser,
} from './thunk';

const initialState = {
  userInfo : [],
  isLoading: false,
  fetched  : false,
};

const authSlice = createSlice({
  name        : 'auth',
  initialState: initialState,
  reducers    : {
    logout: (state) => {
      state.userInfo = null;
      state.fetched = false;
    },
  },
  extraReducers: {
    [getUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.fetched = true;
      state.userInfo = action?.payload?.data;
    },
    [getUser.rejected]: (state) => {
      state.isLoading = false;
    },
    [registerAccount.pending]: (state) => {
      state.isLoading = true;
    },
    [registerAccount.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [registerAccount.rejected]: (state) => {
      state.isLoading = false;
    },
    [loginAccount.pending]: (state) => {
      state.isLoading = true;
    },
    [loginAccount.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userInfo = action?.payload?.data;
    },
    [loginAccount.rejected]: (state) => {
      state.isLoading = false;
    },
    [sendCode.pending]: (state) => {
      state.isLoading = true;
    },
    [sendCode.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [sendCode.rejected]: (state) => {
      state.isLoading = false;
    },
    [verifyCode.pending]: (state) => {
      state.isLoading = true;
    },
    [verifyCode.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [verifyCode.rejected]: (state) => {
      state.isLoading = false;
    },
    [changePassword.pending]: (state) => {
      state.isLoading = true;
    },
    [changePassword.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [changePassword.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
