import React, { FormEvent, useState } from 'react';
import { loginUser } from '../hooks/useLogin';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigate, Link } from 'react-router-dom';
import { toggleIsAuth } from '../redux/UiInteractions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // dispatch(toggleIsAuth())
    loginUser(email, password, navigate, dispatch);
  };

  return (
    <div className='flex items-center justify-center min-h-screen  px-4'>
      <div className=' p-8 rounded-lg shadow-lg w-full max-w-sm'>
        <h2 className='text-2xl font-bold text-white text-center mb-6'>Log In</h2>
        
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor='email' className='block text-gray-400 mb-1'>Email:</label>
            <input
            id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-700'
              required
            />
          </div>
          <div>
            <label htmlFor='password' className='block text-gray-400 mb-1'>Password:</label>
            <input
            id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-700'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition duration-300'
          >
            Log In
          </button>
        </form>
        
        <div className='text-center mt-4'>
          <Link to='/forgot-password' className='text-gray-400 hover:text-white text-sm'>
            Forgot Password?
          </Link>
        </div>

        <div className='text-center mt-2'>
          <span className='text-gray-400 text-sm'>
            Don't have an account?{' '}
            <Link to='/register' className='text-gray-400 hover:text-white font-semibold'>
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
