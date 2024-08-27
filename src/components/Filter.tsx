import { useState } from "react";

const tags = [
    'All', 'Tech', 'Design', 'Marketing', 'Finance', 'Health', 'Travel',
    'Education', 'Food', 'Entertainment', 'Lifestyle', 'Sports', 'Science',
    'Politics', 'Business'
  ];

const Filter = () => {
  const [startIdx , setStartIdx] = useState(0);
  const [endIdx , setEndIdx] = useState(Math.min(10 , tags.length));

  const handlePrev = ()=>{
    setStartIdx(prev => Math.max(0 , prev-1));
    setEndIdx(prev => (endIdx - startIdx > 10)? prev - 1 : prev);
  }

  const handleNext = ()=>{
    setEndIdx(prev => Math.min(tags.length , prev + 1));
    setStartIdx(prev => (endIdx - startIdx > 10)? prev + 1 : prev);
  }
  return (
    <div className="hidden sm:flex flex-col items-start mt-8 container mx-auto sm: w-[60%] sm:mx-auto">
      <div className="flex gap-4 mx-auto">
        {tags.slice(startIdx , endIdx).map(tag => (
          <div
            key={tag}
            className={'cursor-pointer rounded-md font-semibold text-gray-600 hover:text-black'}
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="w-full h-[1px] bg-gray-500 mt-2"></div>
      <button
              onClick={handlePrev}
              className="absolute left-0 top-[44%] transform -translate-y-1/2 p-2 bg-gray-200"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-[44%] transform -translate-y-1/2 p-2 bg-gray-200"
            >
              Next
            </button>
    </div>
  );
};

export default Filter;
