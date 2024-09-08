import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/userSlice';
import Cookies from 'js-cookie';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    dispatch(removeUser());
    localStorage.removeItem('user');
    Cookies.remove('token');
  };

  return (
    <div className="relative inline-block text-left">
      {/* User Avatar */}
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 shadow-lg bg-white text-gray-700 hover:bg-gray-200 focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <img
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="User Avatar"
          className="rounded-full w-full h-full object-cover"
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`origin-top-right absolute -left-2 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-transform duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
        style={{ top: 'calc(100% + 0.5rem)' }} // Adjust this to position just below the nav
      >
        <div className="py-1">
          <a
            href="/home"
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
            role="menuitem"
            onClick={toggleMenu}
          >
            Profile
          </a>
          <a
            href="/"
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
            role="menuitem"
            onClick={handleLogOut}
          >
            Log Out
          </a>
          {/* <a
            href="/page"
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
            role="menuitem"
          >
            Page
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
