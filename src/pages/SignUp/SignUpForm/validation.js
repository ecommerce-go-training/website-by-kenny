import * as yup from 'yup';

const signUpVal = yup.object().shape({
  username       : yup.string().required('Check again'),
  email          : yup.string().email().required(),
  password       : yup.string().min(4).max(12).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
});

export default signUpVal;
