// src/apiHelpers.ts
import axios from 'axios';

export const fetchSingleBlog = async (blogId: string | null, token: string) => {
  try {
    const response = await axios.get(`http://localhost:1337/api/blogs/${blogId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (err) {
    console.error('Error fetching blog:', err);
    throw err; // Re-throw the error to be handled by the caller
  }
};
