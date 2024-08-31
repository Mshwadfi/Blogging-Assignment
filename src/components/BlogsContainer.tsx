import React, { useEffect } from 'react';
import MainBlog from './MainBlog';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { updateEndIdx } from '../redux/pagination';
import axios from 'axios';
import { UpdateBlogs } from '../redux/blogsSlice';
import { blogsPerPage } from '../utils/constants';

const BlogsContainer = () => {
  const { startIdx, endIdx, currentPage } = useSelector((state: RootState) => state.pagination);
  const isBlogsUpdated = useSelector((state: RootState) => state.UiInteractions.isBlogsUpdated);
  const blogs = useSelector((state: RootState) => state.blogs);  
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get('http://localhost:1337/api/blogs?populate=*');
      dispatch(UpdateBlogs(response.data.data));
    };

    fetchBlogs();
  }, [isBlogsUpdated, dispatch]);

  useEffect(() => {
    dispatch(updateEndIdx(Math.min(8, blogs.length)));
  }, [blogs.length, dispatch]);

  return (
    <div className='container mx-auto flex flex-col gap-16 p-6 '>
      <MainBlog blog={blogs[0]} />
      <div className='flex flex-col sm:flex-row items-center justify-start gap-5 flex-wrap'>
        {blogs.slice(1, Math.min(blogsPerPage + 1, blogs.length - 1)).map((blog, index) => (
          <BlogCard blog={blog} key={index} />
        ))}
      </div>
      {/* {Math.ceil(blogs.length / blogsPerPage) > 1 && <Pagination blogs={blogs} />} */}
    </div>
  );
};

export default BlogsContainer;
