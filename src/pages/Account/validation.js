import * as yup from 'yup';

const addressVal = yup.object().shape({
  firstName : yup.string().required('First name is required'),
  lastName  : yup.string().required('Last name is required'),
  address   : yup.string().required("Address can't be empty"),
  city      : yup.string().required(),
  country   : yup.string().required(),
  postalCode: yup.string().required(),
  phone     : yup.string().required(),
});

export default addressVal;
