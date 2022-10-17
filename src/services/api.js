import axios from 'axios';

/* eslint-disable */
const hostName = process.env.REACT_APP_API_BASE_URL;
/* eslint-enable */

const registerAccount = async (data, reset) => {
  try {
    await axios.post(`${hostName}/register`, {
      email      : data.email,
      password   : data.password,
      firstName  : data.firstName,
      lastName   : data.lastName,
      phoneNumber: data.phone,
    });
    alert('Register Success');
    reset();
  } catch (error) {
    alert(error.message);
  }
};

const login = async (data) => {
  try {
    await axios.post(`${hostName}/login`, {
      email   : data.email,
      password: data.password,
    });
  } catch (error) {
    alert(error.message);
  }
};

export { login, registerAccount };
