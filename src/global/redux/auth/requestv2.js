import { api } from 'services/apiv2';

const registerUser = async (data) => {
  const { res } = await api.post('/register', {
    email      : data.email,
    password   : data.password,
    firstName  : data.firstName,
    lastName   : data.lastName,
    phoneNumber: data.phone,
  });
  return res;
};

const loginUser = async (data) => {
  const { res } = await api.post('/login', {
    email   : data.email,
    password: data.password,
  });
  return res;
};

const sendResetPasswordMail = async (data) => {
  const { res } = await api.post('/forget-password', {
    email: data,
  });
  return res;
};

const sendResetPasswordCode = async (data) => {
  const { res } = await api.put('/verify-password-reset-code', {
    email: data.email,
    code : data.code,
  });
  return res;
};

const resetPassword = async (data) => {
  const { res } = await api.put('/reset-password', {
    email          : data.email,
    code           : data.code,
    newPassword    : data.newPassword,
    confirmPassword: data.confirmPassword,
  });
  return res;
};

export {
  loginUser,
  registerUser,
  resetPassword,
  sendResetPasswordCode,
  sendResetPasswordMail,
};
