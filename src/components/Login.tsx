import React, { FormEvent, useState } from 'react';
import { loginUser } from '../hooks/useLogin';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleLoginForm } from '../redux/UiInteractions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook is used here
  const isLoginFormOpen = useSelector((store: RootState) => store.UiInteractions.isLoginFormOpen);
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    loginUser(email, password, navigate, dispatch); 
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-sm relative'>
        <h2 className='text-2xl font-bold mb-4'>Log In</h2>
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
        <button
          className='absolute top-4 right-4 text-gray-800 hover:text-blue-600'
          onClick={()=>dispatch(toggleLoginForm())}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Login;
