import React, { useState } from 'react';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {/* User Avatar */}
      <div>
        <button onClick={toggleMenu} className="inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="rounded-full w-10 h-10"
          />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
            <a href="/home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Home</a>
            <a href="/page" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Page</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
