import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentPage, updateEndIdx, updateStartIdx } from '../redux/pagination';
import { RootState } from '../redux/store';
import { BlogPost, blogsPerPage } from '../utils/constants';


const Pagination = ({ blogs }: { blogs: BlogPost[] }) => {
    useEffect(()=>{
        dispatch(updateEndIdx(Math.min(8 , blogs.length)))
    },[])
    const dispatch = useDispatch();
    const { startIdx, endIdx, currentPage } = useSelector((state: RootState) => state.pagination);

    const totalPages = Math.ceil(blogs.length / blogsPerPage);

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

    return (
        <div className='flex items-center justify-between px-5'>
            <button
                className='py-2 px-4 border-[1px] border-black rounded-md'
                onClick={handlePrev}
                disabled={currentPage === 0}
            >
                Prev
            </button>
            <div className='flex justify-center items-center gap-4'>
                {`${currentPage + 1} / ${totalPages}`}
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
