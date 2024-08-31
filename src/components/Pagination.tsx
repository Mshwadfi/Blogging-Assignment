import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentPage, updateEndIdx, updateStartIdx } from '../redux/pagination';
import { RootState } from '../redux/store';
import { BlogPost, blogsPerPage } from '../utils/constants';


const Pagination = ({ blogs }: { blogs: BlogPost[] }) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(updateEndIdx(Math.min(blogsPerPage - 1 , blogs.length - 1)))
    },[blogs.length, dispatch])
    const { startIdx, endIdx, currentPage } = useSelector((state: RootState) => state.pagination);

    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    console.log(startIdx, endIdx, currentPage)
    const handlePrev = () => {
        if (currentPage > 0) {
            const newPage = currentPage - 1;
            dispatch(updateCurrentPage(newPage));
            dispatch(updateStartIdx(Math.max(0, startIdx - blogsPerPage)));
            dispatch(updateEndIdx(Math.max(blogsPerPage , endIdx - blogsPerPage)));
        }
    }

    const handleNext = () => {
        console.log('clicked');
        if (endIdx < blogs.length - 1) {
            const newPage = currentPage + 1;
            dispatch(updateCurrentPage(newPage));
            dispatch(updateStartIdx(startIdx + blogsPerPage));
            dispatch(updateEndIdx(Math.min(blogs.length , endIdx + blogsPerPage)));
        }
    }

    return (
        <div className='flex items-center justify-between px-5'>
    <button
        className={`py-2 px-4 border-[1px] border-black rounded-md ${startIdx <= 0 ? 'invisible' : ''}`}
        onClick={handlePrev}
        disabled={currentPage === 0}
    >
        Prev
    </button>
    <div className='flex justify-center items-center gap-4'>
        {`${currentPage + 1} / ${totalPages}`}
    </div>
    <button
        className={`cursor-pointer py-2 px-4 border-[1px] border-black rounded-md ${endIdx >= blogs.length ? 'invisible' : ''}`}
        onClick={handleNext}
    >
        Next
    </button>
</div>

    )
}

export default Pagination;
