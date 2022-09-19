import * as yup from 'yup';

const resetVal = yup.object().shape({
  email          : yup.string().email().required('No account found with that email'),
  code           : yup.string().min(4).max(6).required('Try again'),
  password       : yup.string().min(4).max(12).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
});

export default resetVal;
