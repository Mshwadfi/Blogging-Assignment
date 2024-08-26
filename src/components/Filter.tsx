
const tags = ['All', 'Tech', 'Design'];

const Filter = () => {

  return (
    <div className="flex flex-col items-start mt-8 container mx-auto">
      <div className="flex gap-4">
        {tags.map(tag => (
          <div
            key={tag}
            className={'cursor-pointer rounded-md text-base transition-colors'}
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="w-full h-[1px] bg-gray-500 mt-2"></div>
    </div>
  );
};

export default Filter;
