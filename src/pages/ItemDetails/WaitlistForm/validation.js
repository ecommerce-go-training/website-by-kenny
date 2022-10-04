import * as yup from 'yup';

const waitListVal = yup.object().shape({
  firstName: yup.string().required('Cant be empty'),
  lastName : yup.string().required('Cant be empty'),
  email    : yup.string().email().required('Cant be empty'),
  country  : yup.string().required('Try again'),
});

export default waitListVal;
