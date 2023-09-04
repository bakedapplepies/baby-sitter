import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";

type UserState = {
  user: User | null;
}

const initialState: UserState = {
  user: null,
}

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    setUser: (state, actions) => {
      if (!state.user)
      {
        state.user = actions.payload.user;
      }
    },

    removeUser: (state) => {
      if (state.user)
      {
        state.user = null;
      }
    }
  }
});

export const setUser = userSlice.actions.setUser;
export const removeUser = userSlice.actions.removeUser;
export const userReducer = userSlice.reducer;