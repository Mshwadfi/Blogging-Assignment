import { BlogPost } from '../utils/constants';
import { formatDate } from '../hooks/formatDate';
import DropdownMenu from './DropDownMenu'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }: { blog: BlogPost }) => {
  if (!blog) return null;
  const { attributes } = blog;
  const userToken = Cookies.get('token');
  const imageUrl = `http://localhost:1337${attributes.image?.data?.attributes?.url}`;
  const localDate = formatDate(attributes.createdAt);

  console.log(localDate , typeof(localDate))
  return (
    <Link to={`/blog/${blog?.id}`}>
      <div className='flex flex-row sm:flex-col gap-3 items-start justify-start sm:gap-4 bg-white rounded-lg'>
      {imageUrl && (
        <img 
          alt='blog_img' 
          src={imageUrl} 
          className='h-24 min-w-36 sm:h-48 sm:w-80 object-cover rounded-lg transition-transform duration-300 hover:scale-105' 
        />
      )}
      <div className='flex flex-col sm:gap-0 w-full my-auto'>
        <div className='flex items-center justify-between'>
          <h3 className='font-semibold text-red-500 uppercase text-xs sm:text-sm tracking-wide'>{attributes.tag}</h3>
          {userToken && <DropdownMenu id={blog?.id}/>}
        </div>
        <h1 className='text-sm sm:text-xl font-bold leading-tight text-gray-800 max-w-80'>{attributes?.heading.length > 25? attributes?.heading.slice(0, 25) + '...' : attributes?.heading}</h1>
        <p className='hidden sm:block max-w-80'>{attributes?.content.slice(0, 50)}...</p>
        <div className='flex items-center justify-start gap-3 text-gray-500'>
          <span className='hidden sm:block'>•</span>
          <div className='flex items-center gap-1 sm:gap-2 text-sm'>
            <p className='text-xs'>{localDate}</p>
            <span className='block'>•</span>
            <p className='text-xs'>{attributes?.readTime} min read</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default BlogCard;
