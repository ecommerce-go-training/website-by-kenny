import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo       : {},
  userAccessToken: null,
  error          : null,
  code           : null,
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
    loginFail: (state) => {
      state.error = true;
    },
    logout: () => {
      return initialState;
    },
    sendResetCode: (state, action) => {
      return {
        ...state,
        code: action.payload.code,
      };
    },
  },
});
export const { login, loginFail, logout } = authSlice.actions;
export default authSlice.reducer;
