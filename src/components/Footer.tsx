import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-white border-t border-gray-200 p-4 mt-10'>
      {/* <div className='container mx-auto flex flex-col sm:flex-row justify-between items-center'> */}
        <div className='text-center '>
          <p className='text-gray-600'>© 2024 Blogging. All rights reserved.</p>
        </div>
        
      {/* </div> */}
    </footer>
  );
};

export default Footer;
