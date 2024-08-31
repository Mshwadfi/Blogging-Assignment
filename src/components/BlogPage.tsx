import React from 'react';
import { useParams } from 'react-router-dom';
import { BlogPost } from '../utils/constants';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { formatDate } from '../hooks/formatDate';

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/blogs/${id}?populate=*`);
        const jsonResponse = await response.json();
        setBlog(jsonResponse?.data);
        // setLoading(false);
        console.log(jsonResponse.data)
      } catch (error) {
        console.error('Error fetching the blog post:', error);
      }finally{
        setLoading(false);
      }
    };
    
    fetchBlog();
  }, [id]);
  
  
  
  if ( loading) return <div>Loading...</div>;
  if ( !blog) return <div>Blog Not Found</div>;
  console.log(blog)
  const { attributes } = blog;
  const imageUrl = `http://localhost:1337${attributes?.image?.data?.attributes?.url}`;
  const localDate = formatDate(attributes?.createdAt);

  return (
    <div className="container mx-auto p-4 lg:p-8">
      <div className="flex flex-col items-start justify-start gap-8 bg-white rounded-lg shadow-sm">
        {imageUrl && (
          <img
            alt="blog_img"
            src={imageUrl}
            className="h-80 w-full object-cover rounded-t-lg"
          />
        )}
        <div className="p-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{attributes?.heading}</h1>
          <div className="flex items-center gap-4 text-gray-500 mb-4">
            {/* <p className="text-sm">{attributes?.heading || 'Unknown Author'}</p> */}
            <span className="block">•</span>
            <p className="text-sm">{localDate || 'Date Unknown'}</p>
            <span className="block">•</span>
            <p className="text-sm">{attributes?.readTime} min read</p>
          </div>
          <div className="prose prose-lg">
            {/* Render blog content */}
            <p>{attributes?.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
