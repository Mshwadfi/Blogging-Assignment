import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { toggleBlogsUpdateState } from '../redux/UiInteractions';

const CreateBlog = () => {
  const [heading, setHeading] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [tag, setTag] = useState<string>('');
  const [readTime, setReadTime] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const dispatch = useDispatch();
  const getToken = () => Cookies.get('token');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const token = getToken();

    try {
      const userResponse = await axios.get('http://localhost:1337/api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(userResponse , 'rr')
      const currentUser = localStorage.getItem('user');

      const blogData = {
        tag,
        heading,
        content,
        readTime,
        users_permissions: currentUser, 
      };
      console.log(blogData);
      const blogResponse = await axios.post('http://localhost:1337/api/blogs', { data: blogData }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (image) {
        const formData = new FormData();
        formData.append('files', image);
        formData.append('ref', 'api::blog.blog'); 
        formData.append('refId', blogResponse.data.data.id); 
        formData.append('field', 'image'); 

        const hres = await axios.post('http://localhost:1337/api/upload', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(hres)
      }
      console.log(blogResponse )

      setSuccess('Blog created successfully with image and linked to the current user!');
      dispatch(toggleBlogsUpdateState())
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'An error occurred while creating the blog.');
      console.error(err);
    }
  };

  return (
    <div className='p-4 sm:max-w-[70%] md:max-w-[30%] mx-auto mt-10'>
      <h1 className='text-2xl font-bold mb-4'>Create New Blog</h1>
      {error && <p className='text-red-500 mb-4'>{error}</p>}
      {success && <p className='text-green-500 mb-4'>{success}</p>}
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <label>
          Heading:
          <input
            type='text'
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className='border p-2 rounded w-full'
            required
          />
        </label>
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='border p-2 rounded w-full'
            required
          />
        </label>
        <label>
          Tag:
          <input
            type='text'
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className='border p-2 rounded w-full'
            required
          />
        </label>
        <label>
          Read Time (minutes):
          <input
            type='number'
            value={readTime}
            onChange={(e) => setReadTime(e.target.value)}
            className='border p-2 rounded w-full'
            required
          />
        </label>
        <label>
          Image:
          <input
            type='file'
            onChange={handleImageChange}
            className='border p-2 rounded w-full'
          />
        </label>
        <button
          type='submit'
          className='bg-black w-1/3 text-white p-2 rounded'
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
