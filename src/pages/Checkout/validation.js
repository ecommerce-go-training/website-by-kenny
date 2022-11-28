import * as yup from 'yup';

const checkoutVal = yup.object().shape({
  email         : yup.string().email().required('Email cant be empty'),
  firstName     : yup.string().required('First name is required'),
  lastName      : yup.string().required('Last name is required'),
  address       : yup.string().required("Address can't be empty"),
  city          : yup.string().required(),
  countryReg    : yup.string().required(),
  postalCode    : yup.string().required(),
  phone         : yup.string().required(),
  discount      : yup.string(),
  discountMobile: yup.string(),
  cardNumber    : yup
    .number()
    .typeError('Card number must be a number')
    .nullable()
    .moreThan(0, 'Floor area cannot be negative')
    .transform((_, val) => (val !== '' ? Number(val) : null)),
  cardName  : yup.string().notRequired(),
  cardExpire: yup
    .number()
    .typeError('Expire must be a date format')
    .nullable()
    .moreThan(0, 'Floor area cannot be negative')
    .transform((_, val) => (val !== '' ? Number(val) : null)),
  cardSecCode: yup
    .number()
    .typeError('Sec code must be a number')
    .nullable()
    .moreThan(0, 'Floor area cannot be negative')
    .transform((_, val) => (val !== '' ? Number(val) : null)),
});

export default checkoutVal;
