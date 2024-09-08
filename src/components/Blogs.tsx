import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import BlogCard from './BlogCard';
import axios from 'axios';
import { UpdateBlogs } from '../redux/blogsSlice';
import { updateEndIdx } from '../redux/pagination';
import Pagination from './Pagination';
import { BlogPost, blogsPerPage } from '../utils/constants';

const tags = ['All', 'Technology', 'Business', 'Programming', 'Health', 'Fitness', 'Finance'];

const Blogs = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const blogs: BlogPost[] = useSelector((state: RootState) => state.blogs);
  const { startIdx, endIdx } = useSelector((state: RootState) => state.pagination);
  const isBlogsUpdated = useSelector((state: RootState) => state.UiInteractions.isBlogsUpdated);
  const dispatch = useDispatch();

  const filterBlogs = useCallback((tag: string, blogs: BlogPost[]) => {
    let newFilteredBlogs: BlogPost[];
    if (tag === 'All') {
      newFilteredBlogs = blogs;
    } else {
      newFilteredBlogs = blogs.filter(blog => blog?.attributes?.tag.toLowerCase() === tag.toLowerCase());
    }
    setFilteredBlogs(newFilteredBlogs);
    dispatch(updateEndIdx(Math.min(8, newFilteredBlogs.length - 1)));
  }, [dispatch]);

  const fetchBlogs = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/blogs?populate=*');
      const blogData = response.data.data;
      dispatch(UpdateBlogs(blogData));
      filterBlogs(selectedTag, blogData); 
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  }, [dispatch, selectedTag, filterBlogs]); 

  useEffect(() => {
    fetchBlogs();
  }, [isBlogsUpdated, fetchBlogs]);

  useEffect(() => {
    filterBlogs(selectedTag, blogs);
  }, [blogs, selectedTag, filterBlogs]);

  const handleTagFilter = (tag: string) => {
    setSelectedTag(tag);
    filterBlogs(tag, blogs);
  };

  return (
    <div className='container mx-auto mt-20 flex flex-col gap-8 p-4 z-0'>
      <div className="flex flex-col items-start mt-8 container mx-auto sm:w-[60%] sm:mx-auto">
        <div className="flex gap-4 overflow-x-auto whitespace-nowrap w-full scrollbar-hide">
          {tags.map(tag => (
            <div
              key={tag}
              className={`cursor-pointer rounded-md px-4 py-2 font-semibold ${tag === selectedTag ? 'text-white bg-black' : 'text-gray-600'} `}
              onClick={() => handleTagFilter(tag)}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="w-full h-[1px] bg-gray-500 mt-2"></div>
      </div>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-5 flex-wrap p-3'>
        {filteredBlogs.slice(startIdx, endIdx).map((blog, index) => (
          <BlogCard blog={blog} key={index} />
        ))}
      </div>
      {filteredBlogs.length > blogsPerPage && <Pagination blogs={filteredBlogs} />}
    </div>
  );
};

export default Blogs;
