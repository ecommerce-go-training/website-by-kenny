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
  discount      : yup.string().max(12),
  discountMobile: yup.string().max(12),
  cardNumber    : yup
    .number('Need to be number')
    .typeError('Try again')
    .notRequired(),
  cardName   : yup.string().typeError('Try again').notRequired(),
  cardExpire : yup.date().typeError('Try again').notRequired(),
  cardSecCode: yup
    .number('Wrong format, need to be number')
    .typeError('Try again')
    .notRequired(),
});

export default checkoutVal;
