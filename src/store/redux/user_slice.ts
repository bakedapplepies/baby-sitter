import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Babysitter, Parent, User } from "../../types";

export type UserState = {
  user: Parent | Babysitter | null;
  isBabysitter: boolean;
}

const initialState: UserState = {
  user: null,
  isBabysitter: false,
}

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    setUser: (state, actions: PayloadAction<User>) => {
      if (!state.user)
      {
        state.user = actions.payload;
      }
    },

    removeUser: (state) => {
      if (state.user)
      {
        state.user = null;
      }
    },

    setBabySitterTrue: (state) => {
      state.isBabysitter = true;
    },
    
    setBabySitterFalse: (state) => {
      state.isBabysitter = false;
    },
  }
});

export const setUser = userSlice.actions.setUser;
export const removeUser = userSlice.actions.removeUser;
export const setBabySitterTrue = userSlice.actions.setBabySitterTrue;
export const setBabySitterFalse = userSlice.actions.setBabySitterFalse;
export const userReducer = userSlice.reducer;