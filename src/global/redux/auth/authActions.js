import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

const registerUser = createAsyncThunk(
  'auth/register',
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      await axios.post('em doi anh lam be', { username, email, password });
    } catch (err) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export { registerUser };
