import { api } from 'services/api';

const getUserInfo = async () => {
  const res = await api.get('/users/me');
  return res.data;
};

const registerUser = async (data) => {
  const { firstName, lastName, password, phone, email } = data;

  const body = {
    firstName,
    lastName,
    password,
    email,
    phoneNumber: phone,
  };

  const res = await api.post('/register', body);

  return res.data;
};

const loginUser = async (data) => {
  const { email, password } = data;

  const body = {
    email,
    password,
  };

  const res = await api.post('/login', body);

  return res.data;
};

const sendVerifyCodeToMail = async (email) => {
  const body = {
    email,
  };

  const res = await api.post('/forget-password', body);

  return res.data;
};

const checkVerifyCode = async (data) => {
  const { email, code } = data;

  const body = {
    email,
    code,
  };

  const res = await api.put('/verify-password-reset-code', body);

  return res.data;
};

const resetPassword = async (data) => {
  const { email, code, newPassword, confirmPassword } = data;

  const body = {
    email,
    code,
    newPassword,
    confirmPassword,
  };

  const res = await api.put('/reset-password', body);
  return res.data;
};

export {
  checkVerifyCode,
  getUserInfo,
  loginUser,
  registerUser,
  resetPassword,
  sendVerifyCodeToMail,
};
