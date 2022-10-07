import * as yup from 'yup';

const checkoutVal = yup.object().shape({
  email     : yup.string().email().required('Email cant be empty'),
  firstName : yup.string().required('First name is required'),
  lastName  : yup.string().required('Last name is required'),
  address   : yup.string().required(),
  city      : yup.string().required(),
  countryReg: yup.string().required(),
  postalCode: yup.string().required(),
  phone     : yup.string().required(),
  discount  : yup.string().max(12),
});

export default checkoutVal;
