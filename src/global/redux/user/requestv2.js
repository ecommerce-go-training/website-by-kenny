import { api } from 'services/apiv2';

const getUserInfo = async () => {
  const res = await api.get('/users/me');
  return res.data.data;
};

const getUserAddress = async () => {
  const res = await api.get('/addresses');
  return res.data;
};

const addUserAdress = async (data) => {
  const { firstName, lastName, address, city, country, postalCode, phone } =
		data;

  const body = {
    firstName,
    lastName,
    street     : address,
    city,
    country,
    postalCode,
    phoneNumber: phone,
  };

  const res = await api.post('/addresses', body);

  return res.data;
};

const editUserAddress = async (data, id) => {
  const { firstName, lastName, address, city, country, postalCode, phone } =
		data;

  const body = {
    firstName,
    lastName,
    street     : address,
    city,
    country,
    postalCode,
    phoneNumber: phone,
  };

  const res = await api.put(`/addresses/${id}`, body);

  return res;
};

const deleteUserAddress = async (id) => {
  const res = await api.delete(`/addresses/${id}`);
  console.log(
    '🚀 ~ file: requestv2.js ~ line 67 ~ deleteUserAddress ~ res',
    res?.data?.data
  );
  return res?.data?.data;
};

export {
  addUserAdress,
  deleteUserAddress,
  editUserAddress,
  getUserAddress,
  getUserInfo,
};
