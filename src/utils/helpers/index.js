const saveLoginToken = (token) => {
  localStorage.setItem('token', token);
};

const removeLoginToken = () => {
  localStorage.getItem('token', null);
};

export { removeLoginToken, saveLoginToken };
