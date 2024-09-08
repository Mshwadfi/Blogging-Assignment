export interface Blog {
    imgSrc: string;
    tag: string;
    heading: string;
    content:string;
    date: string;
    readTime: string;
  }

 export const blogsPerPage = 8; 
export const blogs: Blog[]  = [
  {
    imgSrc: 'https://images.pexels.com/photos/3184637/pexels-photo-3184637.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    tag: 'Technology',
    heading: 'The Future of AI in Everyday Life',
    content: 'Artificial intelligence (AI) has been transforming industries and everyday life at an unprecedented pace. From virtual assistants like Siri and Alexa to self-driving cars, AI is becoming an integral part of modern society. However, as AI continues to advance, ethical concerns arise around data privacy, job displacement, and the need for regulation. How we navigate these challenges will determine the role AI plays in shaping our future.',
    date: 'August 12, 2024',
    readTime: '5 min read',
  },
  {
    imgSrc: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    tag: 'Business',
    heading: 'How Startups Are Changing the Global Economy',
    content: 'Startups have become a driving force in global economic development. With innovative ideas and cutting-edge technology, startups are disrupting traditional industries, creating new markets, and offering fresh solutions to long-standing problems. However, many challenges remain for entrepreneurs, including securing funding, managing rapid growth, and navigating complex regulatory environments. Despite these obstacles, startups continue to play a vital role in shaping the future of business.',
    date: 'September 3, 2024',
    readTime: '4 min read',
  },
  {
    imgSrc: 'https://images.pexels.com/photos/3182768/pexels-photo-3182768.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    tag: 'Programming',
    heading: 'The Rise of Functional Programming in 2024',
    content: 'Functional programming is becoming increasingly popular as developers seek to build more maintainable and scalable systems. With its emphasis on immutability and pure functions, functional programming can reduce bugs and improve code readability. While not a new concept, modern programming languages like JavaScript, Python, and Kotlin are now supporting functional paradigms, making it easier for developers to adopt these principles in their day-to-day coding.',
    date: 'July 22, 2024',
    readTime: '6 min read',
  },
  {
    imgSrc: 'https://images.pexels.com/photos/4056686/pexels-photo-4056686.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    tag: 'Health',
    heading: 'Meditation: A Path to Mental Clarity',
    content: 'In a world filled with constant distractions, meditation offers a way to find mental clarity and inner peace. Studies have shown that meditation can reduce stress, improve concentration, and boost overall mental well-being. By taking just a few minutes each day to meditate, individuals can develop greater self-awareness and emotional resilience. Whether you’re new to meditation or an experienced practitioner, it’s a powerful tool for enhancing both physical and mental health.',
    date: 'March 15, 2024',
    readTime: '3 min read',
  },
  {
    imgSrc: 'https://images.pexels.com/photos/4144524/pexels-photo-4144524.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    tag: 'Fitness',
    heading: 'The Best Home Workouts for Busy Professionals',
    content: 'With busy schedules, finding time to go to the gym can be a challenge. Fortunately, home workouts offer a convenient and effective way to stay fit. Whether you have 10 minutes or an hour, there are plenty of exercises you can do with minimal equipment. From bodyweight exercises like push-ups and squats to yoga and pilates, home workouts can help you build strength, improve flexibility, and maintain cardiovascular health without leaving the house.',
    date: 'February 19, 2024',
    readTime: '5 min read',
  },
  {
    imgSrc: 'https://images.pexels.com/photos/7055693/pexels-photo-7055693.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    tag: 'Finance',
    heading: 'Personal Finance Tips for 2024',
    content: 'Managing personal finances can be overwhelming, but it’s crucial for long-term financial health. Setting a budget, saving for emergencies, and investing wisely are key steps to achieving financial security. In 2024, new tools and apps make it easier than ever to track your spending and manage your investments. By staying informed and making smart financial decisions, you can take control of your money and build a secure future.',
    date: 'April 10, 2024',
    readTime: '4 min read',
  },
  {
    imgSrc: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    tag: 'Technology',
    heading: 'Blockchain Beyond Cryptocurrency',
    content: 'While blockchain technology is often associated with cryptocurrencies like Bitcoin, its potential applications extend far beyond digital currencies. Blockchain’s ability to provide secure, transparent, and decentralized transactions makes it an ideal solution for industries ranging from healthcare to supply chain management. In the coming years, we can expect to see more widespread adoption of blockchain across a variety of sectors, driving innovation and creating new business opportunities.',
    date: 'May 28, 2024',
    readTime: '5 min read',
  },
  {
    imgSrc: 'https://images.pexels.com/photos/756606/pexels-photo-756606.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    tag: 'Business',
    heading: 'The Power of Networking in Business Growth',
    content: 'Networking is a critical component of business success. Building a strong network of contacts can lead to new opportunities, partnerships, and collaborations. In the digital age, online networking platforms like LinkedIn provide professionals with the tools they need to expand their networks globally. Whether attending industry events or engaging in online communities, effective networking can drive business growth and open doors to new ventures.',
    date: 'June 1, 2024',
    readTime: '4 min read',
  },
  {
    imgSrc: 'https://images.pexels.com/photos/1179865/pexels-photo-1179865.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    tag: 'Programming',
    heading: 'Why Python Remains a Top Programming Language',
    content: 'Python has long been a favorite among developers due to its simplicity, versatility, and extensive libraries. Whether you’re building a web application, conducting data analysis, or developing AI models, Python provides the tools you need to get the job done. Its active community and continuous improvements ensure that Python will remain a top choice for both beginners and experienced developers in 2024 and beyond.',
    date: 'August 17, 2024',
    readTime: '3 min read',
  },
  {
    imgSrc: 'https://images.pexels.com/photos/3779762/pexels-photo-3779762.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
    tag: 'Fitness',
    heading: 'The Importance of Rest Days in Fitness',
    content: 'In the pursuit of fitness goals, rest days are often overlooked, but they are essential for recovery and performance improvement. Rest allows your muscles to repair and grow stronger, reducing the risk of injury. Incorporating rest days into your workout routine can prevent burnout and keep you motivated in the long run. Whether you’re training for a marathon or just looking to stay active, balancing exercise with proper rest is key to long-term success.',
    date: 'May 5, 2024',
    readTime: '4 min read',
  }
];


interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

interface ImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    small: ImageFormat;
    thumbnail: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
}

interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

interface BlogPostAttributes {
  tag: string;
  heading: string;
  content: string;
  readTime: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: {
    data: ImageData;
  };
}

export interface BlogPost {
  id: number;
  attributes: BlogPostAttributes;
}

