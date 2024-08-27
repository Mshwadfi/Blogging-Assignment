import React from 'react'

const MainBlog = () => {
  return (
    <div className='container flex flex-col sm:flex-row items-start justify-start gap-8 sm:gap-16 bg-white rounded-lg'>
      <img 
        alt='blog_img' 
        src='https://images.pexels.com/photos/27221310/pexels-photo-27221310/free-photo-of-a-plate-with-scrambled-eggs-tomatoes-and-other-ingredients.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' 
        className='h-48 w-80 sm:h-80 sm:w-1/4 object-cover rounded-lg transition-transform duration-300 hover:scale-105' 
      />
      <div className='flex flex-col gap-3 w-full sm:my-auto'>
        <h3 className='font-semibold text-red-500 uppercase text-sm tracking-wide'>Tag</h3>
        <h1 className='text-3xl font-bold leading-tight text-gray-800'>Heading</h1>
        <div className='flex items-center justify-start gap-3 text-gray-500'>
            <div className='hidden sm:flex items-center gap-2'>
                <img 
                  src="https://images.pexels.com/photos/27221310/pexels-photo-27221310/free-photo-of-a-plate-with-scrambled-eggs-tomatoes-and-other-ingredients.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" 
                  alt="Author" 
                  className='w-12 h-12 rounded-full object-cover'
                />
                <h2 className=' text-gray-700'>Muhammad Alshwadfy</h2>
            </div>
            <span className='hidden sm:block'>•</span>
            <div className='flex items-center gap-2 text-sm'>
              <p>April 18, 2020</p>
              <span className='block'>•</span>
              <p>3 min read</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainBlog
