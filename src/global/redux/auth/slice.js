import { createSlice } from '@reduxjs/toolkit';
import { registerAccount, loginAccount } from './thunk';

const initialState = {
  userInfo : {},
  isLoading: false,
};

const authSlice = createSlice({
  name        : 'auth',
  initialState: initialState,
  reducers    : {
    login: (state, action) => {
      state.userInfo = action.payload.userInfo;
    },
    logout: (state) => {
      state.userInfo = null;
    },
  },
  extraReducers: {
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
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
