import { api } from 'services/api';

const registerUser = async (data, reset) => {
  try {
    await api.post('/register', {
      email      : data.email,
      password   : data.password,
      firstName  : data.firstName,
      lastName   : data.lastName,
      phoneNumber: data.phone,
    });
    reset();
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (data, setLoading) => {
  try {
    return await api.post('/login', {
      email   : data.email,
      password: data.password,
    });
  } catch (error) {
    setLoading(false);
    alert(error.message);
  }
};

export { loginUser, registerUser };
