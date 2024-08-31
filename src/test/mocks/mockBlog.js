export const mockBlog = {
    id: 1,
    attributes: {
      heading: 'Test Heading for Blog Post',
      tag: 'Test Tag',
      content: 'This is a test content for the blog post to ensure that it truncates correctly.',
      image: {
        data: {
          attributes: {
            url: '/uploads/test_image.jpg',
          },
        },
      },
      createdAt: "2024-08-28T15:30:53.061Z",
      readTime: 5,
    },
  };