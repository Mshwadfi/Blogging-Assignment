import React from 'react'
import MainBlog from './MainBlog'
import BlogCard from './BlogCard'
import { blogs } from '../utils/constants'
import Pagination from './Pagination'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
const BlogsContainer = () => {
    const { startIdx, endIdx, currentPage } = useSelector((state: RootState) => state.pagination);
    console.log(startIdx , endIdx , currentPage);
    return (
    <div className='flex flex-col gap-16 p-8'>
      <MainBlog />
      <div className='flex items-center justify-start gap-5 flex-wrap'>
      {blogs.slice(startIdx , endIdx).map((blog , index) =>(
        <BlogCard blog={blog} key={index} />
      ))}
      </div>
      <Pagination blogs={blogs}/>
    </div>
  )
}

export default BlogsContainer
