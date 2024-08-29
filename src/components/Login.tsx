import React, { FormEvent, useState } from 'react';
import { loginUser } from '../hooks/useLogin';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleLoginForm } from '../redux/UiInteractions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const isLoginFormOpen = useSelector((store: RootState) => store.UiInteractions.isLoginFormOpen);
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginUser(email, password, navigate, dispatch);
  };

  return (
    <div className='fixed inset-0 flex flex-col items-center justify-center '>
      <h2 className='text-2xl font-bold mb-4'>Log In</h2>
      <div className='bg-white p-6 rounded-lg flex flex-col sm:flex-row items-center justify-center gap-16 w-full max-w-4xl'>
        {/* User Image Section */}
        <div className='w-1/2'>
          <img
            src='https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Replace with your image path
            alt='User'
            className='object-cover w-full h-full rounded-l-lg'
          />
        </div>

        <div className='w-2/3 p-6'>
          
          <form onSubmit={handleSubmit}>
            <label className='block mb-2'>
              Email:
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='block w-full mt-1 p-2 border border-gray-300 rounded'
                required
              />
            </label>
            <label className='block mb-4'>
              Password:
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='block w-full mt-1 p-2 border border-gray-300 rounded'
                required
              />
            </label>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700'
            >
              Log In
            </button>
          </form>
          {/* <button
            className='absolute top-4 right-4 text-gray-800 hover:text-blue-600'
            onClick={()=>dispatch(toggleLoginForm())}
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
