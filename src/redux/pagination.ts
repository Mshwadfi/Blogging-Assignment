import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        startIdx: 0,
        endIdx: 0,
        currentPage: 0,
    },
    reducers: {
        updateStartIdx: (state, action: PayloadAction<number>) => {
            state.startIdx = action.payload;
        },
        updateEndIdx: (state, action: PayloadAction<number>) => {
            state.endIdx = action.payload;
        },
        updateCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
    }
})

export const { updateStartIdx, updateEndIdx, updateCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;
