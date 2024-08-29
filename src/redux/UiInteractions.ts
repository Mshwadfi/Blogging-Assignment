import { createSlice } from "@reduxjs/toolkit";



const UiInteractionsSlice = createSlice({
    name: 'UiInteractions',
    initialState: {
        isLoginFormOpen: false,
        isRegisterFormOpen: false,
        isUserMenuOn: false,
        isBlogDeleted: false,
    },
    reducers: {
        toggleLoginForm: (state)=> {state.isLoginFormOpen = !state.isLoginFormOpen},
        toggleRegisterForm: (state)=> {state.isRegisterFormOpen = !state.isRegisterFormOpen},
        toggleUserMenu: (state)=>{state.isUserMenuOn = !state.isUserMenuOn},
        toggleBlogDeletionState: (state) =>{state.isBlogDeleted = !state.isBlogDeleted}
    }
})

export const {toggleLoginForm , toggleRegisterForm, toggleUserMenu , toggleBlogDeletionState} = UiInteractionsSlice.actions;
export default UiInteractionsSlice.reducer;