import { createSlice } from "@reduxjs/toolkit";



const blogsSlice = createSlice({
    name: 'blogs',
    initialState: [],
    
    reducers: {
        UpdateBlogs: (state , action)=>{
            return action.payload;
        }
    }
})

export const {UpdateBlogs} = blogsSlice.actions;
export default blogsSlice.reducer;