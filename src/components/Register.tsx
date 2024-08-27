import React, { FormEvent, useState } from 'react';
import { registerUser } from '../hooks/useLogin'; // Make sure you have a corresponding hook for registration
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleRegisterForm } from '../redux/UiInteractions';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const navigate = useNavigate(); // Hook is used here
  const isRegisterFormOpen = useSelector((store: RootState) => store.UiInteractions.isRegisterFormOpen);
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === confirmPassword) {
      if (profilePhoto) {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('profilePhoto', profilePhoto);

        registerUser(formData);
      } else {
        alert('Profile photo is required');
      }
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-sm relative'>
        <h2 className='text-2xl font-bold mb-4'>Register</h2>
        <form onSubmit={handleSubmit}>
          <label className='block mb-2'>
            Username:
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='block w-full mt-1 p-2 border border-gray-300 rounded'
              required
            />
          </label>
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
          <label className='block mb-2'>
            Password:
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='block w-full mt-1 p-2 border border-gray-300 rounded'
              required
            />
          </label>
          <label className='block mb-4'>
            Confirm Password:
            <input
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='block w-full mt-1 p-2 border border-gray-300 rounded'
              required
            />
          </label>
          <label className='block mb-4'>
            Profile Photo:
            <input
              type='file'
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setProfilePhoto(e.target.files[0]);
                }
              }}
              className='block w-full mt-1 p-2 border border-gray-300 rounded'
              accept='image/*'
              required
            />
          </label>
          <button
            type='submit'
            className='w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700'
          >
            Register
          </button>
        </form>
        <button
          className='absolute top-4 right-4 text-gray-800 hover:text-blue-600'
          onClick={() => dispatch(toggleRegisterForm())}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Register;
