import { createSlice } from "@reduxjs/toolkit";



const UiInteractionsSlice = createSlice({
    name: 'UiInteractions',
    initialState: {
        isLoginFormOpen: false,
        isRegisterFormOpen: false,
        isUserMenuOn: false,
        isBlogsUpdated: false,
        isUpdateBlogFormOpen: false,
        currentBlogId: null,
        isAuth: false,
    },
    reducers: {
        toggleLoginForm: (state)=> {state.isLoginFormOpen = !state.isLoginFormOpen},
        toggleRegisterForm: (state)=> {state.isRegisterFormOpen = !state.isRegisterFormOpen},
        toggleUserMenu: (state)=>{state.isUserMenuOn = !state.isUserMenuOn},
        toggleBlogsUpdateState: (state) =>{state.isBlogsUpdated = !state.isBlogsUpdated},
        toggleIsAuth: (state)=>{state.isAuth = !state.isAuth},
        toggleUpdateBlogForm: (state , action) =>{
            state.isUpdateBlogFormOpen = !state.isUpdateBlogFormOpen;
            state.currentBlogId = action.payload;
        }
    }
})

export const {toggleLoginForm , toggleRegisterForm,toggleIsAuth, toggleUserMenu , toggleBlogsUpdateState , toggleUpdateBlogForm} = UiInteractionsSlice.actions;
export default UiInteractionsSlice.reducer;