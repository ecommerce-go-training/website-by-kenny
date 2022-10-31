import { createSlice } from '@reduxjs/toolkit';
import { register } from './thunk';

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
    [register.pending]: (state) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload.userInfo;
    },
    [register.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
