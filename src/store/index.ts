import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/reducer";

const configureStore({
    reducer
})


export type RootState = Return<Typeof Store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;