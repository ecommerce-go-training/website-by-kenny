import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getUserAddress,
  addUserAdress,
  editUserAddress,
  deleteUserAddress,
} from './request';

const getAddress = createAsyncThunk('user/get-address', async () => {
  const res = await getUserAddress();
  return {
    status: true,
    data  : res.data,
  };
});

const addAddress = createAsyncThunk('user/add-address', async (data) => {
  const res = await addUserAdress(data);
  return {
    status: true,
    data  : res.data,
  };
});

const editAddress = createAsyncThunk(
  'user/edit-address',
  async ({ data, addressId, addressIndex }) => {
    const res = await editUserAddress(data, addressId);
    return {
      status: true,
      data  : res.data,
      index : addressIndex,
    };
  }
);

const deleteAddress = createAsyncThunk(
  'user/delete-address',
  async (addressId) => {
    const res = await deleteUserAddress(addressId);
    return {
      status: true,
      id    : res,
    };
  }
);

export { addAddress, deleteAddress, editAddress, getAddress };
