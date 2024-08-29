import React, { useEffect, useState } from 'react'
import MainBlog from './MainBlog'
import BlogCard from './BlogCard'
import { blogs } from '../utils/constants'
import Pagination from './Pagination'
import store, { RootState } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { updateEndIdx } from '../redux/pagination'
const BlogsContainer = () => {
    const { startIdx, endIdx, currentPage } = useSelector((state: RootState) => state.pagination);
    const [blogs , setBlogs] = useState([]);
    const isBlogDeleted = useSelector((state: RootState) => state.UiInteractions.isBlogDeleted);
    const dispatch = useDispatch();
    useEffect(()=>{
      fetchBlogs();
    },[isBlogDeleted])
    const fetchBlogs = async () =>{
      const response = await fetch('http://localhost:1337/api/blogs?populate=*');
      const data = await response.json();
      setBlogs(data.data);
      console.log(data.data , 'blogs')
    }
    dispatch(updateEndIdx(Math.min(8 , blogs.length)))
    console.log(startIdx , endIdx , currentPage);
    return (
    <div className='container mx-auto flex flex-col gap-16 p-8 '>
      <MainBlog />
      <div className='flex flex-col sm:flex-row items-center justify-start gap-5 flex-wrap'>
      {blogs.slice(startIdx , endIdx+1).map((blog , index) =>(
        <BlogCard blog={blog} key={index} />
      ))}
      </div>
      {Math.ceil(blogs.length / 8) > 1 && <Pagination blogs={blogs}/>}
    </div>
  )
}

export default BlogsContainer
