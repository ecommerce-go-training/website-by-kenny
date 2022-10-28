import { api } from 'services/api';
import { showNoti } from 'utils/helpers';

const updateUserAdress = async (
  data,
  reset,
  setLoading,
  setToggleAddAddress
) => {
  try {
    setLoading(true);
    await api.post('/addresses', {
      firstName  : data.firstName,
      lastName   : data.lastName,
      street     : data.address,
      city       : data.city,
      country    : data.country,
      postalCode : data.postalCode,
      phoneNumber: data.phone,
    });
    showNoti('success', 'Update success');
    setLoading(false);
    reset();
    setToggleAddAddress(false);
  } catch (error) {
    setLoading(false);
    showNoti('error', error.data.message);
  }
};

const getUserAddress = async (setData) => {
  try {
    const request = await api.get('/addresses');
    setData(request.data.data);
    return request;
  } catch (error) {
    showNoti('error', error.data.message);
  }
};

const deleteUserAddress = async (id, setLoading) => {
  try {
    setLoading(true);
    const request = await api.delete(`/addresses/${id}`);
    setLoading(false);
    showNoti('success', 'Delete success');
    return request;
  } catch (error) {
    setLoading(false);
    showNoti('error', error.data.message);
  }
};

const editAddress = async (
  id,
  data,
  setLoading,
  reset,
  setToggleAddAddress,
  setEditForm
) => {
  try {
    setLoading(true);
    await api.put(`/addresses/${id}`, {
      firstName  : data.firstName,
      lastName   : data.lastName,
      street     : data.address,
      city       : data.city,
      country    : data.country,
      postalCode : data.postalCode,
      phoneNumber: data.phone,
    });
    reset();
    setLoading(false);
    setEditForm(false);
    setToggleAddAddress(false);
    showNoti('success', 'Edit success');
  } catch (error) {
    setLoading(false);
    showNoti('error', error.data.message);
  }
};

export { deleteUserAddress, editAddress, getUserAddress, updateUserAdress };
