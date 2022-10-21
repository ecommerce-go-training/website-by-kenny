const saveLoginToken = (token) => {
  localStorage.setItem('token', token);
};

const removeLoginToken = () => {
  localStorage.removeItem('token');
};

export { removeLoginToken, saveLoginToken };
