import { api } from 'services/api';
import { saveLoginToken } from 'utils/helpers';
import { toast } from 'react-toastify';

const showErrorNoti = (message) => toast.error(message);
const showSuccessNoti = (message) => toast.success(message);

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
    showSuccessNoti('Register Success');
  } catch (error) {
    setLoading(false);
    showErrorNoti(error.message);
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
    showErrorNoti(error.message);
  }
};

const sendResetPasswordMail = async (
  data,
  setLoading,
  setPage,
  showErrorNoti
) => {
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
    showErrorNoti(error.message);
  }
};

const sendResetPasswordCode = async (
  data,
  setLoading,
  setPage,
  showErrorNoti
) => {
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
    showErrorNoti(error.message);
  }
};

const changePassword = async (data, setLoading, setPage, showErrorNoti) => {
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
    showErrorNoti(error.message);
  }
};

export {
  changePassword,
  loginUser,
  registerUser,
  sendResetPasswordCode,
  sendResetPasswordMail,
};
