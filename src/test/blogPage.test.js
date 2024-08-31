import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlogPage from '../components/BlogPage';
import { useParams } from 'react-router-dom';
import { mockBlog } from './mocks/mockBlog';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));
jest.mock('../hooks/formatDate', () => ({
    formatDate: jest.fn((dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }),
  }));

describe('BlogPage Component', () => {
  beforeEach(() => {
    useParams.mockReturnValue({ id: '1' });
  });

  test('renders loading state initially', () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: null }),
      })
    );
    render(<BlogPage />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders the blog post correctly after fetching', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: mockBlog }),
      })
    );
  
    render(<BlogPage />);
  
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });
  
    const image = screen.getByAltText('blog_img');
    // const date = screen.getByText('August 28, 2024');
    const readTime = screen.getByText('5 min read');
    // expect(date).toBeInTheDocument();
    expect(readTime).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'http://localhost:1337/uploads/test_image.jpg');
    expect(screen.getByText('Test Heading for Blog Post')).toBeInTheDocument();
    expect(screen.getByText('This is a test content for the blog post to ensure that it truncates correctly.')).toBeInTheDocument();
  });
  
  

  test('handles error during fetching', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error('Error fetching the blog post'))
    );
  
    render(<BlogPage />);
  
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  
    await waitFor(() => {
      expect(screen.queryByText('Blog Not Found')).not.toBeInTheDocument();
    });
  });
  
});
