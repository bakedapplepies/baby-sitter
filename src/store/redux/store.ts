import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user_slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    userSlice: userReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useDispatchApp: () => AppDispatch = useDispatch;
export const useSelectorApp: TypedUseSelectorHook<RootState> = useSelector;
export default store;