import React from 'react';

interface Blog {
  imgSrc: string;
  tag: string;
  heading: string;
  date: string;
  readTime: string;
}

const BlogCard = ({blog}:{blog:Blog}) => {
  const { imgSrc, tag, heading, date, readTime } = blog;
  return (
    <div className='flex flex-col items-start justify-start gap-8 bg-white rounded-lg'>
      <img 
        alt='blog_img' 
        src={imgSrc} 
        className='h-48 w-80 object-cover rounded-lg transition-transform duration-300 hover:scale-105' 
      />
      <div className='flex flex-col gap-3 w-full'>
        <h3 className='font-semibold text-red-500 uppercase text-sm tracking-wide'>{tag}</h3>
        <h1 className='text-xl font-bold leading-tight text-gray-800'>{heading}</h1>
        <div className='flex items-center justify-start gap-3 text-gray-500'>
          <span className='hidden sm:block'>•</span>
          <div className='flex items-center gap-2 text-sm'>
            <p>{date}</p>
            <span className='block'>•</span>
            <p>{readTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
