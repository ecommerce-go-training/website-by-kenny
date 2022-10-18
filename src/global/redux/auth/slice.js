import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo       : {},
  userAccessToken: null,
  error          : null,
};

const authSlice = createSlice({
  name        : 'auth',
  initialState: initialState,
  reducers    : {
    login: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        userInfo       : action.payload.userInfo,
        userAccessToken: action.payload.accessToken,
      };
    },
    loginSuccess: (state, action) => {
      state.userAccessToken = action.payload.token;
    },
    loginFail: (state) => {
      state.error = true;
    },
    logout: (state) => {
      state.userInfo = [];
    },
  },
});
export const { login, loginSuccess, loginFail, logout } = authSlice.actions;
export default authSlice.reducer;
