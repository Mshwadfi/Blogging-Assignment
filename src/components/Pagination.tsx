import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentPage, updateEndIdx, updateStartIdx } from '../redux/pagination';
import { RootState } from '../redux/store';

interface Blog {
    imgSrc: string;
    tag: string;
    heading: string;
    date: string;
    readTime: string;
}

const Pagination = ({ blogs }: { blogs: Blog[] }) => {
    useEffect(()=>{
        dispatch(updateEndIdx(Math.min(8 , blogs.length)))
    },[])
    const dispatch = useDispatch();
    const { startIdx, endIdx, currentPage } = useSelector((state: RootState) => state.pagination);

    const blogsPerPage = 8;
    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    const slidingWindow = [1,2,3,4];

    const handlePrev = () => {
        if (currentPage > 0) {
            const newPage = currentPage - 1;
            dispatch(updateCurrentPage(newPage));
            dispatch(updateStartIdx(Math.max(0, startIdx - blogsPerPage)));
            dispatch(updateEndIdx(Math.max(blogsPerPage - 1, endIdx - blogsPerPage)));
        }
    }

    const handleNext = () => {
        if (endIdx < blogs.length - 1) {
            const newPage = currentPage + 1;
            dispatch(updateCurrentPage(newPage));
            dispatch(updateStartIdx(startIdx + blogsPerPage));
            dispatch(updateEndIdx(Math.min(blogs.length - 1, endIdx + blogsPerPage)));
        }
    }

    const handlePageClick = (index : number)=>{
        dispatch(updateCurrentPage(index));
        dispatch(updateStartIdx(index*blogsPerPage));
        dispatch(updateEndIdx(Math.min(blogs.length - 1 , (index+1)*blogsPerPage)))
    }

    return (
        <div className='flex items-center justify-between'>
            <button
                className='py-2 px-4 border-[1px] border-black rounded-md'
                onClick={handlePrev}
                disabled={currentPage === 0}
            >
                Prev
            </button>
            <div className='flex justify-center items-center gap-4'>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    className={`w-12 h-12 rounded-md ${index === currentPage ? 'bg-black text-white' : ''}`}
                    onClick={() => handlePageClick(index)}
                >
                    {index + 1}
                </button>
            ))}
            </div>
            <button
                className='py-2 px-4 border-[1px] border-black rounded-md'
                onClick={handleNext}
                disabled={endIdx >= blogs.length - 1}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination;
