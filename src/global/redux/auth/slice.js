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
  },
});
export const { login, loginFail, logout } = authSlice.actions;
export default authSlice.reducer;
