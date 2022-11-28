import { api } from 'services/api';

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
  return res?.data?.data;
};

export { addUserAdress, deleteUserAddress, editUserAddress, getUserAddress };
