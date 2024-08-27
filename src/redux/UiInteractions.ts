import { createSlice } from "@reduxjs/toolkit";



const UiInteractionsSlice = createSlice({
    name: 'UiInteractions',
    initialState: {
        isLoginFormOpen: false,
        isRegisterFormOpen: false,
    },
    reducers: {
        toggleLoginForm: (state)=> {state.isLoginFormOpen = !state.isLoginFormOpen},
        toggleRegisterForm: (state)=> {state.isRegisterFormOpen = !state.isRegisterFormOpen},
    }
})

export const {toggleLoginForm , toggleRegisterForm} = UiInteractionsSlice.actions;
export default UiInteractionsSlice.reducer;