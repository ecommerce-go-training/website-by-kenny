import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import signUpVal from './validation';

import './style.scss';

function SignUpForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signUpVal),
  });

  const submitForm = (data) => {
    // fetch data to server later on
    console.log(data);
    localStorage.setItem('isLogin', 'true');
    reset();
    navigate('/');
  };

  return (
    <div className='login'>
      <form className='login__form' onSubmit={handleSubmit(submitForm)}>
        <label>SIGN UP</label>
        <input
          {...register('username')}
          name='username'
          placeholder='Username'
          type='text'
        />
        <p>{errors.username?.message}</p>
        <input
          {...register('email')}
          name='email'
          placeholder='Email'
          type='text'
        />
        <p>{errors.email?.message}</p>
        <input
          {...register('password')}
          name='password'
          placeholder='Password'
          type='password'
        />
        <p>{errors.password?.message}</p>
        <input
          {...register('confirmPassword')}
          name='confirmPassword'
          placeholder='Confirm password'
          type='password'
        />
        <p>{errors.confirmPassword && 'Doesnt match'}</p>
        <button>Sign Up</button>
      </form>
      <div>
        <p>Already have an account?</p>
        <Link to='/signIn'>Login now</Link>
      </div>
    </div>
  );
}

export default SignUpForm;
