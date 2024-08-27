import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleLoginForm, toggleRegisterForm } from '../redux/UiInteractions';
import UserMenu from './UserMenu';
import Cookies from 'js-cookie';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const userToken = Cookies.get('token');
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className='flex flex-col sm:flex-row justify-between items-center p-4 container mx-auto bg-white shadow-md border-b border-gray-200'>
      <div className='flex justify-between items-center w-full sm:w-auto'>
        <h1 className='text-3xl font-bold text-gray-800'>
          <Link to="/" className=''>Blogging</Link>
        </h1>
        <button 
          className='block sm:hidden p-2 text-gray-800 hover:text-blue-600 transition duration-300'
          onClick={toggleMenu}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </button>
      </div>
      <nav className='hidden sm:flex'>
          <ul className='flex gap-6 text-gray-700 font-semibold'>
            <li>
              <Link to="/" className='hover:text-blue-600 transition duration-300'>Home</Link>
            </li>
            <li>
              <Link to="/blogs" className='hover:text-blue-600 transition duration-300'>Blogs</Link>
            </li>
            <li>
              <Link to="/profile" className='hover:text-blue-600 transition duration-300'>Profile</Link>
            </li>
          </ul>
        </nav>
      <div className={`fixed inset-0 bg-white shadow-lg sm:hidden transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          className='absolute top-4 right-4 p-2 text-gray-800 hover:text-blue-600 transition duration-300'
          onClick={toggleMenu}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
        <div className='flex flex-col items-center mt-16'>
          <Link to="/" className='py-2 text-gray-700 font-semibold hover:text-blue-600 transition duration-300' onClick={toggleMenu}>Home</Link>
          <Link to="/blogs" className='py-2 text-gray-700 font-semibold hover:text-blue-600 transition duration-300' onClick={toggleMenu}>Blogs</Link>
          <Link to="/profile" className='py-2 text-gray-700 font-semibold hover:text-blue-600 transition duration-300' onClick={toggleMenu}>Profile</Link>
          <Link to="/login">
            <button className='text-gray-800 font-medium border border-gray-300 rounded-lg px-4 py-2 mt-4 hover:bg-gray-100 transition duration-300'>
              Log in
            </button>
          </Link>
          <Link to="/register">
            <button className='text-white bg-blue-600 rounded-lg px-4 py-2 mt-4 font-medium hover:bg-blue-700 transition duration-300'>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
     { userToken && <div className='hidden sm:flex gap-4 mt-4 sm:mt-0'>
        <Link to="/login">
          <button className='text-gray-800 font-medium border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition duration-300'
          onClick={()=>dispatch(toggleLoginForm())}
          >Log in</button>
        </Link>
        <Link to="/register">
          <button className='text-white bg-black rounded-lg px-4 py-2 font-medium hover:bg-blue-700 transition duration-300'
          onClick={()=>dispatch(toggleRegisterForm())}>Sign Up</button>
        </Link>
      </div>}
      {userToken && <UserMenu />}
    </header>
  );
}

export default Header;
