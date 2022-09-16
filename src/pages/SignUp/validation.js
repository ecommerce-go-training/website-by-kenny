import * as yup from 'yup';

const signUpVal = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'Mininum 2 characters')
    .max(30, 'Maximum 30 characters')
    .required('Please enter first name'),
  lastName: yup
    .string()
    .min(2, 'Mininum 2 characters')
    .max(30, 'Maximum 30 characters')
    .required('Please enter first name'),
  phone: yup
    .number()
    .typeError('Amount must be a number')
    .required('Please enter your phone number'),
  email   : yup.string().email().required('Enter email'),
  password: yup.string().min(4).max(12).required('Enter your password'),
});

export default signUpVal;
