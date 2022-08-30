import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './style.scss';

function SignInForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email   : '',
      password: '',
    },
  });
  const email = watch('email');
  const password = watch('password');

  console.log(email);
  console.log(password);

  return (
    <div className='login'>
      <form
        className='login__form'
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <label>LOGIN</label>
        <input
          {...register('email', { required: 'Name cant be empty' })}
          placeholder='Email'
          type={'text'}
        />
        <p>{errors.email?.message}</p>
        <input
          {...register('password', {
            required : 'Password cant be empty',
            minLength: {
              value  : 8,
              message: 'Minimun length is 8',
            },
          })}
          placeholder='Password'
          type={'password'}
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
