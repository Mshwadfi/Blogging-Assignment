import React, { useState, useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleBlogsUpdateState, toggleUpdateBlogForm } from '../redux/UiInteractions';
import { fetchSingleBlog } from '../hooks/fetchSingleBlog';
import axios from 'axios';

const UpdateBlog = () => {
  const [formData, setFormData] = useState({
    tag: '',
    heading: '',
    content: '',
    readTime: '',
  });
  const [loading, setLoading] = useState(true);
  const { currentBlogId } = useSelector((state: RootState) => state.UiInteractions);
  const dispatch = useDispatch();

  const token = Cookies.get('token') || '';

  const getBlog = useCallback(async () => {
    try {
      const blog = await fetchSingleBlog(currentBlogId, token);
      setFormData({
        tag: blog.attributes.tag,
        heading: blog.attributes.heading,
        content: blog.attributes.content,
        readTime: blog.attributes.readTime,
      });
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch blog:", error);
    }
  }, [currentBlogId, token]);

  useEffect(() => {
    getBlog();
  }, [getBlog]); // Now getBlog is a dependency

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:1337/api/blogs/${currentBlogId}`, {
        data: formData,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(toggleUpdateBlogForm(null));
      dispatch(toggleBlogsUpdateState());
      // navigate(`/blog/${currentBlogId}`);
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  if (loading) return null;

  return (
    <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-10'>
      <div className='bg-white relative p-6 rounded-lg w-full max-w-md'>
        <button
          onClick={() => dispatch(toggleUpdateBlogForm(null))}
          className='absolute top-2 right-2 text-gray-600 hover:text-gray-800'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
        <h2 className='text-xl text-center font-bold mb-4'>Update Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Tag</label>
            <input
              type='text'
              name='tag'
              value={formData.tag}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Heading</label>
            <input
              type='text'
              name='heading'
              value={formData.heading}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Content</label>
            <textarea
              name='content'
              value={formData.content}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded'
              rows={5}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Read Time</label>
            <input
              type='number'
              name='readTime'
              value={formData.readTime}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded'
            />
          </div>
          <button type='submit' className='bg-black text-white py-2 px-4 rounded'>
            Update Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
