import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleBlogDeletionState } from '../redux/UiInteractions';

const DropdownMenu = ({id}:{id:number}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const token = Cookies.get('token');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:1337/api/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Post deleted');
    } catch (error) {
      console.log(error);
    }
    setIsOpen(!isOpen);
    dispatch(toggleBlogDeletionState());
  };

  return (
    <div className="relative inline-block text-left">
      <button 
        onClick={toggleMenu} 
        className="text-gray-600 hover:text-gray-800"
      >
        <svg 
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="19" cy="12" r="1.5" />
          <circle cx="5" cy="12" r="1.5" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
          <Link to={`/blog/update/${id}`}
            
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Update
          </Link>
          <button 
            onClick={handleDelete} 
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
