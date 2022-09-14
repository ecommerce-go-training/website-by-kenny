import * as yup from 'yup';

const signInVal = yup.object().shape({
  email   : yup.string().email().required('Cant be empty'),
  password: yup.string().min(4).max(12).required('Try again'),
});

export default signInVal;
