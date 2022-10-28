import { api } from 'services/api';
import { saveLoginToken, showNoti } from 'utils/helpers';

const registerUser = async (data, reset, setLoading) => {
  try {
    setLoading(true);
    await api.post('/register', {
      email      : data.email,
      password   : data.password,
      firstName  : data.firstName,
      lastName   : data.lastName,
      phoneNumber: data.phone,
    });
    setLoading(false);
    reset();
    showNoti('success', 'Register Success');
  } catch (error) {
    setLoading(false);
    showNoti('error', error.data.message);
  }
};

const loginUser = async (data, setLoading) => {
  try {
    const res = await api.post('/login', {
      email   : data.email,
      password: data.password,
    });
    saveLoginToken(res.data.data.accessToken);
    return res;
  } catch (error) {
    setLoading(false);
    showNoti('error', error.data.message);
  }
};

const sendResetPasswordMail = async (data, setLoading, setPage, showNoti) => {
  try {
    setLoading(true);
    const res = await api.post('/forget-password', {
      email: data,
    });
    setLoading(false);
    setPage((prev) => prev + 1);
    return res;
  } catch (error) {
    setLoading(false);
    showNoti('error', error.data.message);
  }
};

const sendResetPasswordCode = async (data, setLoading, setPage, showNoti) => {
  try {
    setLoading(true);
    const res = await api.put('/verify-password-reset-code', {
      email: data.email,
      code : data.code,
    });
    setLoading(false);
    setPage((prev) => prev + 1);
    return res;
  } catch (error) {
    setLoading(false);
    showNoti('error', error.data.message);
  }
};

const changePassword = async (data, setLoading, setPage, showNoti) => {
  try {
    setLoading(true);
    const res = await api.put('/reset-password', {
      email          : data.email,
      code           : data.code,
      newPassword    : data.newPassword,
      confirmPassword: data.confirmPassword,
    });
    setLoading(false);
    setPage((prev) => prev + 1);
    return res;
  } catch (error) {
    setLoading(false);
    showNoti(error.data.message);
  }
};

export {
  changePassword,
  loginUser,
  registerUser,
  sendResetPasswordCode,
  sendResetPasswordMail,
};
