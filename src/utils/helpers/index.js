const saveLoginToken = (token) => {
  localStorage.setItem('token', token);
};

const removeLoginToken = () => {
  localStorage.removeItem('token');
};

const isLogin = localStorage.getItem('isLogin');

export { isLogin, removeLoginToken, saveLoginToken };
