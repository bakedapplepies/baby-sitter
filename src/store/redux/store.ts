import { configureStore, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";

const user: User = {
  id: "u0", name: "Paityn George", pfp: require("../../../assets/Avatar.png")
};

const userSlices = createSlice({
  name: "user_slices",
  initialState: {
    user: user
  }, 
  reducers: {
    Print: (state) => {
      console.log(state.user.id);
    }
  }
});

export const store = configureStore({
  reducer: {
    UserSlices: userSlices.reducer,
  }
});