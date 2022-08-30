import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './style.scss';

function SignUpForm() {
  const { register, handleSubmit } = useForm();

  return (
    <div className='login'>
      <form
        className='login__form'
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <label>SIGN UP</label>
        <input {...register('email')} placeholder='Email' type={'text'} />
        <input
          {...register('password')}
          placeholder='Password'
          type={'password'}
        />
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
