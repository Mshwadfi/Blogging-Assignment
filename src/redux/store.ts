import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./pagination";
import UiInteractionsReducer from "./UiInteractions";
import userSliceReducer from "./userSlice";


const store = configureStore({
    reducer:{
        pagination: paginationReducer,
        UiInteractions: UiInteractionsReducer,
        user: userSliceReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;