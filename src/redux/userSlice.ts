import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState : {
        currentUser: null, 
        isAuth: false
    },
    reducers: {
        addUser: (state, action) => {
            state.currentUser = action.payload;
            state.isAuth = true;
        },
        removeUser: (state) => {
            state.currentUser = null; 
            state.isAuth = false;
        }
    }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
