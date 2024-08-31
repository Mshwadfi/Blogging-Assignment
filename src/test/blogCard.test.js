import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlogCard from '../components/BlogCard';
import Cookies from 'js-cookie';
import { mockBlog } from './mocks/mockBlog';
jest.mock('js-cookie', () => ({
  get: jest.fn(),
}));

jest.mock('../hooks/formatDate', () => ({
  formatDate: jest.fn((dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }),
}));

jest.mock('../components/DropDownMenu.tsx', () => () => <div>Mocked DropdownMenu</div>);



describe('BlogCard Component', () => {
  test('renders the BlogCard component with all elements', () => {
    Cookies.get.mockReturnValue('test-token');

    render(<BlogCard blog={mockBlog} />);

    const image = screen.getByAltText('blog_img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'http://localhost:1337/uploads/test_image.jpg');

    const heading = screen.getByText((content, element) => {
      return content.startsWith('Test Heading for ');
    });
    expect(heading).toBeInTheDocument();

    const content = screen.getByText((content, element) => {
      return content.startsWith('This is a test content for the ');
    });
    expect(content).toBeInTheDocument();

    const tag = screen.getByText('Test Tag');
    expect(tag).toBeInTheDocument();

    // const date = screen.getByText('August 28, 2024');
    const readTime = screen.getByText('5 min read');
    // expect(date).toBeInTheDocument();
    expect(readTime).toBeInTheDocument();

    const dropdownMenu = screen.getByText('Mocked DropdownMenu');
    expect(dropdownMenu).toBeInTheDocument();
  });

  test('does not render the DropdownMenu when userToken is not present', () => {
    Cookies.get.mockReturnValue(null);

    render(<BlogCard blog={mockBlog} />);

    const dropdownMenu = screen.queryByText('Mocked DropdownMenu');
    expect(dropdownMenu).not.toBeInTheDocument();
  });

  test('returns null when no blog is provided', () => {
    const { container } = render(<BlogCard blog={null} />);
    expect(container).toBeEmptyDOMElement();
  });
});
