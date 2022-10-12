import * as yup from 'yup';

const returnVal = yup.object().shape({
  orderNumber: yup
    .number('Must be a number')
    .required('Hello')
    .typeError('Must be a number'),
  email       : yup.string().email().required(),
  returnReason: yup.string().required(),
  link        : yup.string().required(),
});

export default returnVal;
