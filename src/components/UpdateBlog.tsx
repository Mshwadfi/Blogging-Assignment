import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const UpdateBlog = () => {
  const [formData, setFormData] = useState({
    tag: '',
    heading: '',
    content: '',
    readTime: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const token = Cookies.get('token'); // Replace this with your actual JWT token

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/blogs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const blog = response.data.data;
        setFormData({
          tag: blog.attributes.tag,
          heading: blog.attributes.heading,
          content: blog.attributes.content,
          readTime: blog.attributes.readTime,
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch the blog details.');
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id, token]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:1337/api/blogs/${id}`, {
        data: formData,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate(`/blog/${id}`);
    } catch (error) {
      console.error('Error updating blog:', error);
      setError('Failed to update the blog.');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-6 rounded-lg w-full max-w-md'>
        <h2 className='text-xl font-bold mb-4'>Update Blog</h2>
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
          <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700'>
            Update Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
