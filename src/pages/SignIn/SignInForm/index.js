import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import signInVal from './validation';

import './style.scss';

function SignInForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signInVal),
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
        <label onClick={() => navigate('/')}>LOGIN</label>
        <input
          {...register('email')}
          placeholder='Email'
          type='text'
          name='email'
        />
        <p>{errors.email?.message}</p>
        <input
          {...register('password')}
          placeholder='Password'
          type='password'
        />
        <p>{errors.password?.message}</p>
        <button>Login</button>
      </form>
      <div>
        <span>Dont have an account?</span>
        <Link to='/signUp'>Sign up now</Link>
      </div>
    </div>
  );
}

export default SignInForm;
